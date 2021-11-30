# Contract security measures

## Floating pragma
Specific compiler pragma `0.8.0` used in contracts to avoid accidental bug inclusion through outdated compiler versions.

## Modifiers used only for validation
Modifier in contract only validate data with `require` statements.


## Avoiding use of Tx.Origin
Protecting the address of the account that sent a transaction by using msg.sender instad of tx.origin.

