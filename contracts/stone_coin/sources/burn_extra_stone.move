module stone_coin::burn_extra_stone {
    use sui::coin::{Self, TreasuryCap};
    use stone_coin::stone::STONE;

    /// Burn STONE tokens using the TreasuryCap
    entry fun burn(
        treasury_cap: &mut TreasuryCap<STONE>, 
        coin_to_burn: coin::Coin<STONE>
    ) {
        coin::burn(treasury_cap, coin_to_burn);
    }

    
}
