#[allow(deprecated_usage)]
module stone_coin::stone;

use sui::coin;
use sui::url::new_unsafe_from_bytes;




public struct STONE has drop{}


fun init(otw: STONE, ctx: &mut TxContext) {
    let (treasury, metadata) = coin::create_currency(
        otw,
        9,
        b"STONE",
        b"STONE",
        b"Meet STONE the cutest space rock floating through the bloclchain cosmos! Dive into a world of fun, community and rewards",
        option::some(new_unsafe_from_bytes(b"https://drive.google.com/file/d/1m8iaHr9TXzJay8nkH49c45g2D8ayp4mf/view?usp=sharing")),
        ctx
    );

    transfer::public_freeze_object(metadata);
    transfer::public_transfer(treasury,ctx.sender());
}




































