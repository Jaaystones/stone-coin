#[allow(deprecated_usage)]
module stone_coin::stone;

use sui::coin::{ Self, TreasuryCap };
use sui::url::new_unsafe_from_bytes;

const EInvalidAmount: u64 = 0;
const ESupplyExceeded: u64 = 1;

public struct STONE has drop {}


// const COMMUNITY_SUPPLY: u64 = 700_000_000_000_000_000;
// const CEX_SUPPLY: u64 = 200_000_000_000_000_000;
// const OPERATIONS_SUPPLY: u64 = 100_000_000_000_000_000;
public struct MintCapability has key {
    id: UID,
    total_mined: u64,
}


const TOTAL_SUPPLY: u64 = 1_000_000_000_000_000_000;
const INITIAL_SUPPLY: u64 = 100_000_000_000_000_000;

fun init(otw: STONE, ctx: &mut TxContext) {
    let (mut treasury, metadata) = coin::create_currency(
        otw,
        9,
        b"STONE",
        b"STONE",
        b"Meet STONE the cutest space rock floating through the blockchain cosmos! Dive into a world of fun, community and rewards",
        option::some(new_unsafe_from_bytes(b"https://drive.google.com/uc?export=view&id=1NUkxZZMBtBaZvH--PJfkX_fcotnPj2es")),
        ctx
    );
    // mint(&mut treasury, COMMUNITY_SUPPLY, @stone_community, ctx);
    // mint(&mut treasury, CEX_SUPPLY, @stone_coin_cex, ctx);
    // mint(&mut treasury, OPERATIONS_SUPPLY, ctx.sender(), ctx);

    let mut mint_cap = MintCapability {
        id: object::new(ctx),
        total_mined: 0,
    };

    mint(&mut treasury, &mut mint_cap, INITIAL_SUPPLY, ctx.sender(), ctx);



    transfer::public_freeze_object(metadata);
    transfer::public_transfer(treasury, ctx.sender());
    transfer::transfer(mint_cap, ctx.sender());
}

public fun mint(
    treasury_cap: &mut TreasuryCap<STONE>,
    mint_cap: &mut MintCapability,
    amount: u64,
    recipient: address,
    ctx: &mut TxContext
) {
    assert!(amount > 0, EInvalidAmount);
    assert!(mint_cap.total_mined + amount <= TOTAL_SUPPLY, ESupplyExceeded);

    let coin = coin::mint(treasury_cap, amount, ctx);
    transfer::public_transfer(coin, recipient);

    mint_cap.total_mined = mint_cap.total_mined + amount;

}


#[test_only]
use sui::test_scenario;

#[test]
fun test_init() {
    let publisher = @0x11;

    let mut scenario = test_scenario::begin(publisher);
    {
        let otw = STONE {};
        init(otw, scenario.ctx());
    };

    scenario.next_tx(publisher);
    {
        let mint_cap = scenario.take_from_sender<MintCapability>();
        let stone_coin = scenario.take_from_sender<coin::Coin<STONE>>();


        assert!(mint_cap.total_mined == INITIAL_SUPPLY, EInvalidAmount);
        assert!(stone_coin.balance().value() == INITIAL_SUPPLY, EInvalidAmount);

        scenario.return_to_sender(stone_coin);
        scenario.return_to_sender(mint_cap);
    };

    scenario.next_tx(publisher);
    {
        let mut treasury_cap = scenario.take_from_sender<TreasuryCap<STONE>>();
        let mut mint_cap = scenario.take_from_sender<MintCapability>();

        mint(
            &mut treasury_cap,
            &mut mint_cap,
            900_000_000_000_000_000,
            scenario.ctx().sender(),
            scenario.ctx()
        );

        assert!(mint_cap.total_mined == TOTAL_SUPPLY, EInvalidAmount);

        scenario.return_to_sender(treasury_cap);
        scenario.return_to_sender(mint_cap);
    };

    scenario.end();
}
