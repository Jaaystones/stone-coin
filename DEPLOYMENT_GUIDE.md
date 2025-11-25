# STONE Coin Deployment Guide

## Overview
This guide documents the complete process of creating, deploying, and managing the STONE cryptocurrency on the Sui blockchain.

## Project Structure
```
stone-coin/
├── contracts/
│   └── stone_coin/
│       ├── sources/
│       │   ├── stone_coin.move         # Main coin contract
│       │   └── burn_extra_stone.move   # Burn functionality
│       ├── Move.toml                   # Package configuration
│       └── build/                      # Compiled artifacts
└── frontend/                           # Frontend application
```

## Step-by-Step Deployment Process

### 1. Contract Development

#### Create Main Contract (`stone_coin.move`)
```move
#[allow(deprecated_usage)]
module stone_coin::stone;

use sui::coin::{ Self, TreasuryCap };
use sui::url::new_unsafe_from_bytes;

public struct STONE has drop {}

const TOTAL_SUPPLY: u64 = 1_000_000_000_000_000_000;

fun init(otw: STONE, ctx: &mut TxContext) {
    let (mut treasury, metadata) = coin::create_currency(
        otw,
        9,                    // decimals
        b"STONE",            // symbol
        b"STONE",            // name
        b"Description",      // description
        option::some(new_unsafe_from_bytes(b"IMAGE_URL")),  // icon
        ctx
    );
    
    // Mint total supply
    mint(&mut treasury, TOTAL_SUPPLY, ctx.sender(), ctx);
    
    // Freeze metadata (can't be changed)
    transfer::public_freeze_object(metadata);
    
    // Transfer treasury cap to deployer
    transfer::public_transfer(treasury, ctx.sender());
}

public fun mint(
    treasury_cap: &mut TreasuryCap<STONE>,
    amount: u64,
    recipient: address,
    ctx: &mut TxContext
) {
    let coin = coin::mint(treasury_cap, amount, ctx);
    transfer::public_transfer(coin, recipient);
}
```

**Key Components:**
- **Total Supply:** 1,000,000,000,000,000,000 (1 billion tokens with 9 decimals)
- **Decimals:** 9 (standard for many tokens)
- **Symbol:** STONE
- **Icon:** URL to token image

### 2. Build the Contract

```bash
cd /home/jay/stone-coin/contracts/stone_coin
sui move build
```

**Expected Output:**
```
INCLUDING DEPENDENCY Bridge
INCLUDING DEPENDENCY SuiSystem
INCLUDING DEPENDENCY Sui
INCLUDING DEPENDENCY MoveStdlib
BUILDING stone_coin
```

### 3. Publish to Sui Network

```bash
sui client publish --gas-budget 100000000
```

**What You'll Receive:**
- **Package ID:** The unique identifier for your deployed contract
- **TreasuryCap Object ID:** Authority to mint/burn tokens
- **UpgradeCap Object ID:** Authority to upgrade the contract
- **Coin Object IDs:** The actual minted tokens

**Example Output:**
```
Package ID: 0x42788669a7b157c6afe4708c15d51827253ba5976d88540a0005b4d1bc8b6230
TreasuryCap: 0xd8da4824020d98f052e9c395f9c92c8f68595fe116396aebe29ad6409e8bd117
UpgradeCap: 0x319da568040a263210fe9192a2bd190121084d300f14c2764606ae96b1b0d177
```

### 4. Verify Deployment

Check your objects:
```bash
sui client objects
```

Inspect specific objects:
```bash
sui client object <OBJECT_ID>
```

### 5. How to Burn Coins (Step-by-Step)

Burning coins permanently removes them from circulation by transferring them to the null address that no one can access.

#### Step 1: List All Your Objects

First, see all objects you own:
```bash
sui client objects
```

**Output will show:**
```
╭────────────┬──────────────────────────────────────────────────────────────────────╮
│ objectId   │  0x253821aeb4dd98d29a817980c8c092a7ba199ab77833e018edaa754f376a81e8  │
│ version    │  4                                                                   │
│ digest     │  R830QWDI3g7zoNmBjx1b7uN0X0C9PTknsxNOpBKkWrk=                        │
│ objectType │  0x0000..0002::coin::Coin                                            │
╰────────────┴──────────────────────────────────────────────────────────────────────╯
```

#### Step 2: Identify the Coin Object ID

Look for objects with type `coin::Coin` or `coin::TreasuryCap`. Note the `objectId`.

To get more details about a specific object:
```bash
sui client object <OBJECT_ID>
```

**Example:**
```bash
sui client object 0x253821aeb4dd98d29a817980c8c092a7ba199ab77833e018edaa754f376a81e8
```

**Output will show the coin type and amount:**
```
│ objType  │  0x2::coin::Coin<0xe9f48648c43e6d66cdeed5d2739cad9e97064740cb8b6d73b425749d90ce2b28::stone::STONE>  │
│ fields   │ ╭─────────┬───────────────────────╮
│          │ │ balance │  1000000000000000000  │
```

#### Step 3: Transfer to Null Address (Burn)

Transfer the coin to the null address `0x0000000000000000000000000000000000000000000000000000000000000000`:

```bash
sui client transfer \
  --to 0x0000000000000000000000000000000000000000000000000000000000000000 \
  --object-id <COIN_OBJECT_ID> \
  --gas-budget 10000000
```

**Real Example:**
```bash
sui client transfer \
  --to 0x0000000000000000000000000000000000000000000000000000000000000000 \
  --object-id 0x253821aeb4dd98d29a817980c8c092a7ba199ab77833e018edaa754f376a81e8 \
  --gas-budget 10000000
```

#### Step 4: Verify the Burn

After execution, you'll see a transaction summary:

```
Transaction Digest: 8FRye3NxMWXYe9nY3M1JVvUSoTpxRWqwnEgZhUpVd3hR
Status: Success ✓
```

**Balance Changes will show:**
```
│ Owner: Account Address ( 0x0000000000000000000000000000000000000000000000000000000000000000 )  │
│ CoinType: 0xe9f48648c43e6d66cdeed5d2739cad9e97064740cb8b6d73b425749d90ce2b28::stone::STONE     │
│ Amount: 1000000000000000000                                                                    │
```

The coin is now owned by the null address and **permanently burned**.

#### Step 5: Verify Coin is Gone (Optional)

List your objects again to confirm:
```bash
sui client objects
```

The burned coin object ID should no longer appear in your list (or will show as owned by `0x0000...0000`).

#### Complete Example: Burning Multiple Coins

If you have multiple duplicate coins to burn:

```bash
# Step 1: List all objects
sui client objects

# Step 2: Inspect first coin
sui client object 0x253821aeb4dd98d29a817980c8c092a7ba199ab77833e018edaa754f376a81e8

# Step 3: Burn first coin
sui client transfer \
  --to 0x0000000000000000000000000000000000000000000000000000000000000000 \
  --object-id 0x253821aeb4dd98d29a817980c8c092a7ba199ab77833e018edaa754f376a81e8 \
  --gas-budget 10000000

# Step 4: Inspect second coin
sui client object 0xc47740bf2aa47897b96797e9df8790459f169bef97de7157992dfef15c737416

# Step 5: Burn second coin
sui client transfer \
  --to 0x0000000000000000000000000000000000000000000000000000000000000000 \
  --object-id 0xc47740bf2aa47897b96797e9df8790459f169bef97de7157992dfef15c737416 \
  --gas-budget 10000000

# Step 6: Verify all coins are burned
sui client objects
```

#### Important Notes

**What Happens When You Burn:**
- ✅ Coins are transferred to `0x0000...0000` (null address)
- ✅ No one can access this address (no private keys exist)
- ✅ Coins are permanently removed from circulation
- ✅ Transaction is irreversible
- ✅ Gas cost: ~0.001 SUI per burn (~1,000,000 MIST)

**Gas Budget Explained:**
- `--gas-budget 10000000` means 10,000,000 MIST (0.01 SUI)
- Actual cost is usually ~1,000,000 MIST (0.001 SUI)
- Unused gas is refunded

**Why Burn to Null Address:**
- The null address `0x0000...0000` is the standard burn address on Sui
- It's mathematically impossible to generate the private key for this address
- Coins sent here are provably unspendable
- This is the equivalent of "burning" tokens on other blockchains

### 6. Adding Burn Functionality (Optional)

Create `burn_extra_stone.move`:
```move
module stone_coin::burn_extra_stone {
    use sui::coin::{Self, TreasuryCap};
    use stone_coin::stone::STONE;

    /// Burn STONE tokens using the TreasuryCap
    public entry fun burn(
        treasury_cap: &mut TreasuryCap<STONE>, 
        coin_to_burn: coin::Coin<STONE>
    ) {
        coin::burn(treasury_cap, coin_to_burn);
    }
}
```

**Note:** This requires upgrading or republishing the contract.

### 7. Upgrading the Contract

If you need to add new functionality:

```bash
# Build with changes
sui move build

# Upgrade using UpgradeCap
sui client upgrade \
  --upgrade-capability <UPGRADE_CAP_ID> \
  --gas-budget 100000000
```

**Important:** Package upgrades have restrictions. You cannot add new modules that reference old coin types from previous packages.

## Key Information to Save

After deployment, save these values:

```json
{
  "network": "mainnet/testnet/devnet",
  "package_id": "0x42788669a7b157c6afe4708c15d51827253ba5976d88540a0005b4d1bc8b6230",
  "treasury_cap": "0xd8da4824020d98f052e9c395f9c92c8f68595fe116396aebe29ad6409e8bd117",
  "upgrade_cap": "0x319da568040a263210fe9192a2bd190121084d300f14c2764606ae96b1b0d177",
  "coin_type": "0x42788669a7b157c6afe4708c15d51827253ba5976d88540a0005b4d1bc8b6230::stone::STONE",
  "total_supply": "1000000000000000000",
  "decimals": 9,
  "symbol": "STONE"
}
```

## Common Commands

### Check Gas Balance
```bash
sui client gas
```

### List All Objects
```bash
sui client objects
```

### Inspect Specific Object
```bash
sui client object <OBJECT_ID>
```

### Transfer Coins
```bash
sui client transfer \
  --to <RECIPIENT_ADDRESS> \
  --object-id <COIN_OBJECT_ID> \
  --gas-budget 10000000
```

### Call Contract Functions
```bash
sui client call \
  --package <PACKAGE_ID> \
  --module <MODULE_NAME> \
  --function <FUNCTION_NAME> \
  --args <ARG1> <ARG2> \
  --gas-budget 10000000
```

## Troubleshooting

### Issue: Insufficient Gas
**Error:** `InsufficientCoinBalance`
**Solution:** Acquire more SUI tokens for gas fees

### Issue: Module Not Found
**Error:** `Module not found in package`
**Solution:** The module wasn't included in the published package. You need to upgrade or republish.

### Issue: Package ID Mismatch
**Error:** `PackageIDDoesNotMatch`
**Solution:** This happens when trying to upgrade a modified package. The source files have changed significantly.

### Issue: Duplicate Publications
**Problem:** Accidentally published the same contract multiple times
**Solution:** Burn duplicate coins by transferring to null address `0x0000...0000`

## Best Practices

1. **Test First:** Always test on devnet/testnet before mainnet
2. **Save IDs:** Keep a record of all important object IDs
3. **Gas Buffer:** Set gas budget higher than estimated to avoid failures
4. **Verify Transactions:** Check transaction status after each operation
5. **Backup Keys:** Securely store your wallet private keys
6. **Document Changes:** Keep track of all contract upgrades
7. **Single Line Base64:** When adding images, keep base64 data on a single line
8. **Version Control:** Use git to track all contract changes

## Security Considerations

1. **TreasuryCap:** Whoever owns this can mint unlimited tokens
2. **UpgradeCap:** Whoever owns this can modify the contract
3. **Frozen Metadata:** Once frozen, metadata cannot be changed
4. **Null Address Burns:** Transfers to `0x0000...0000` are permanent and irreversible

## Resources

- **Sui Documentation:** https://docs.sui.io
- **Sui Move Book:** https://move-book.com
- **Sui Explorer:** https://suiexplorer.com
- **Sui CLI Install:** https://docs.sui.io/guides/developer/getting-started/sui-install

## Notes

- Gas budget is in MIST (1 SUI = 1,000,000,000 MIST)
- Typical gas costs: ~0.001-0.01 SUI per transaction
- Network protocol versions may differ from CLI versions
- Use `--verify-deps` flag for dependency verification during publish
- The null address `0x0000...0000` is the standard burn address on Sui

---

**Last Updated:** November 25, 2025
**Contract Version:** 1.0
**Network:** Sui Mainnet/Testnet
