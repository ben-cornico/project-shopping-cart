const productData = {
    kids: [
        {
            name: 'Weekend',
            img: [
                require('./kids weekend/1_fda14842-7738-47df-ba99-2822787c287d_400x.webp'),
                require('./kids weekend/Kid_sWeekendWhiteSole_b0f849e2-e7ed-46f4-8d38-f1752261a384_400x.webp'),
                require('./kids weekend/KidsWeekendAsphaltBlack-BackView-WhiteBG-WithShadow_400x.webp'),
                require('./kids weekend/KidsWeekendAsphaltBlack-SideView-Right-WhiteBG-WithShadow_400x.webp')
            ]
        },
        {
            name: 'Weekend Chelsea',
            img: [
                require('./kids weekend chelsea/Kid_sWeekendWhiteSole_400x.webp'),
                require('./kids weekend chelsea/WeekendChelseaKid_sBoots-Black-3_4View-WhiteBG-WithShadow_400x.webp'),
                require('./kids weekend chelsea/WeekendChelseaKid_sBoots-Black-BackView-WhiteBG-WithShadow_400x.webp'),
                require('./kids weekend chelsea/WeekendChelseaKid_sBoots-Black-RightSideView-WhiteBG-WithShadow_400x.webp')
            ]
        }
    ],

    mens: [
        {
            name: 'Weekend',
            img: [
                require("./men's weekend/AsphaltBlack-3_4SideView-Transparent-WithShadow_400x.webp"),
                require("./men's weekend/AsphaltBlack-BackView-Transparent-WithShadow_400x.webp"),
                require("./men's weekend/AsphaltBlack-SideView-Right-Transparent-WithShadow_400x.webp"),
                require("./men's weekend/WeekendWhiteSole-Transparent-WithShadow_400x.webp")
            ]
        },
        {
            name: 'Cityscape',
            img: [
                require("./men's cityscape/Cityscape-CharcoalGrey-3_4SideView-Transparent-WithShadow_400x.webp"),
                require("./men's cityscape/Cityscape-CharcoalGrey-BackView-Transparent-WithShadow_400x.webp"),
                require("./men's cityscape/Cityscape-CharcoalGrey-SideView-Right-Transparent-WithShadow_400x.webp"),
                require("./men's cityscape/CityscapeGrey_WhiteSole-Transparent-WithShadow_400x.webp")
            ]
        },
        {
            name: 'Everyday Move Slip-ons',
            img: [
                require("./men's everyday move slip-ons/EverydayMoveStandardOnyxBlackOnBlackSole-Transparent-WithShadowcopy2_27f41b06-6031-4b4e-b05f-07047ecfdb5a_400x.webp"),
                require("./men's everyday move slip-ons/EVMoveSlip-OnBlackOnBlack-3_4View-Transparent-WithShadow_a832d415-bcd7-4402-9772-142030f08f63_400x.webp"),
                require("./men's everyday move slip-ons/EVMoveSlip-OnBlackOnBlack-BackView-Transparent-WithShadow_cc42cb40-ebf5-4dc6-9dfa-101288c352d0_400x.webp"),
                require("./men's everyday move slip-ons/EVMoveSlip-OnBlackOnBlack-RightSideView-Transparent-WithShadow_18a32a6c-61b2-4ca2-80ac-deaae11eec85_400x.webp")
            ]
        },
        {
            name: 'Everyday Classic',
            img: [
                require("./men's everyday classic/EverydayClassicMidnightBlackonBlack-3_4View-Transparent-WithShadow_400x.webp"),
                require("./men's everyday classic/EverydayClassicMidnightBlackonBlack-BackView-Transparent-WithShadow_1f3accb4-3dd1-41d2-98d3-6dcb9368fe22_1200x.webp"),
                require("./men's everyday classic/EverydayClassicMidnightBlackonBlack-RightSideView-Transparent-WithShadow_6ff2221a-fae4-4a9e-a15c-d3ffe6ce02bc_1200x.webp"),
                require("./men's everyday classic/EverydayMoveStandardOnyxBlackOnBlackSole-Transparent-WithShadowcopy_4daf17e7-c48c-45e0-83f2-7b36e0156edd_1200x.webp")
            ]
        },
        {
            name: 'Sunday Slippers',
            img: [
                require("./men's sunday slippers/WeekendCozySlipper-Black-RightSideView-Transparent-WithShadow_400x.webp"),
                require("./men's sunday slippers/WeekendCozySlipper-WhiteSole-Transparent-WithShadowcopy_400x.webp"),
                require("./men's sunday slippers/WeekendCozySlippers-Black-3_4View-Transparent-WithShadow_400x.webp"),
                require("./men's sunday slippers/WeekendCozySlippers-Black-BackSideView-Transparent-WithShadow_400x.webp")
            ]
        }
    ],

    womens: [
        {
            name: 'Weekend',
            img: [
                require("./women's weekend/ConcreteGrey-3_4SideView-Transparent-WithShadow_400x.webp"),
                require("./women's weekend/ConcreteGrey-BackView-Transparent-WithShadow_400x.webp"),
                require("./women's weekend/ConcreteGrey-SideView-Right-Transparent-WithShadow_400x.webp"),
                require("./women's weekend/WeekendWhiteSole-Transparent-WithShadow_b47313b9-581b-49b9-9696-37330c3890f3_400x.webp")
            ]
        },
        {
            name: 'Cityscape',
            img: [
                require("./women's cityscape/Cityscape-CharcoalGrey-3_4SideView-Transparent-WithShadow_3d0a68d5-96d4-42d7-af90-55f942af6ce4_400x.webp"),
                require("./women's cityscape/Cityscape-CharcoalGrey-BackView-Transparent-WithShadow_b586526e-2287-4abc-a072-855302c4ea60_400x.webp"),
                require("./women's cityscape/Cityscape-CharcoalGrey-SideView-Right-Transparent-WithShadow_1c93fc77-c578-4e56-8eba-bb554761a7a5_400x.webp"),
                require("./women's cityscape/CityscapeGrey_WhiteSole-Transparent-WithShadow_c7d5903b-edb3-4337-8e52-923638b99b8e_400x.webp")
            ]
        },
        {
            name: 'Everyday Move Slip-ons',
            img: [
                require("./women's everyday move slip-ons/EverydayMoveStandardGreenSole-Transparent-WithShadowcopy5_c3579597-4259-46d9-b785-aad733fade29_400x.webp"),
                require("./women's everyday move slip-ons/EVMoveSlip-OnOnyxBlack-3_4View-Transparent-WithShadow_9a956878-d021-41cf-87aa-1ad925f4045b_400x.webp"),
                require("./women's everyday move slip-ons/EVMoveSlip-OnOnyxBlack-BackView-Transparent-WithShadow_c161ea9d-40a3-4854-b4e3-8accbb19c731_400x.webp"),
                require("./women's everyday move slip-ons/EVMoveSlip-OnOnyxBlack-RightSideView-Transparent-WithShadow_e64f694e-e278-4633-852d-f24a975ec517_400x.webp")
            ]
        },
        {
            name: 'Everyday Classic',
            img: [
                require("./women's everyday classic/EverydayClassic-CherryRed_OffWhite-3_4View-Transparent-WithShadow_84e6ffac-cb4a-49ff-9885-b7207d0ecdb1_400x.webp"),
                require("./women's everyday classic/EverydayClassic-CherryRed_OffWhite-BackView-Transparent-WithShadow_3d0f87e0-b600-4579-83f8-963f2fb7ade5_400x.webp"),
                require("./women's everyday classic/EverydayClassic-CherryRed_OffWhite-RightSideView-Transparent-WithShadow_500acb93-1db4-45a4-b19a-c92f97bd6d73_400x.webp"),
                require("./women's everyday classic/EverydayClassic-GumSole-Transparent-WithShadowcopy2_1fb4f2c2-d40b-4d98-900d-ed0a166d2972_400x.webp")
            ]
        },
        {
            name: 'Sunday Slippers',
            img: [
                require("./women's sunday slippers/WeekendCozySlipper-Black-RightSideView-Transparent-WithShadow_7e505fee-7192-4303-ba8e-d8ad5ebc29a6_400x.webp"),
                require("./women's sunday slippers/WeekendCozySlipper-WhiteSole-Transparent-WithShadowcopy_1968e8d0-8a59-4198-bc40-d40aef2d297a_400x.webp"),
                require("./women's sunday slippers/WeekendCozySlippers-Black-3_4View-Transparent-WithShadow_1ecbb694-267f-451f-9b10-bac08ec2e6d9_400x.webp"),
                require("./women's sunday slippers/WeekendCozySlippers-Black-BackSideView-Transparent-WithShadow_4315e799-2700-42d4-8e40-46ba77fc7fd3_400x.webp")
            ]
        }
    ]
}

export default productData