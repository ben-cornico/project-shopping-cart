const productData = {
    kid: [
        {
            id: '001',
            name: 'Weekend',
            price: 49.99,
            img: [
                require('./kids weekend/1.webp'),
                require('./kids weekend/2.webp'),
                require('./kids weekend/3.webp'),
                require('./kids weekend/4.webp')
            ]
        },
        {
            id: '002',
            name: 'Weekend Chelsea',
            price: 59.99,
            img: [
                require('./kids weekend chelsea/1.webp'),
                require('./kids weekend chelsea/2.webp'),
                require('./kids weekend chelsea/3.webp'),
                require('./kids weekend chelsea/4.webp')
            ]
        }
    ],

    men: [
        {
            
            id: '101',
            name: 'Weekend',
            price: 49.99,
            img: [
                require("./men's weekend/1.webp"),
                require("./men's weekend/2.webp"),
                require("./men's weekend/3.webp"),
                require("./men's weekend/4.webp")
            ]
        },
        {
            
            id: '102',
            name: 'Cityscape',
            price: 59.99,
            img: [
                require("./men's cityscape/1.webp"),
                require("./men's cityscape/2.webp"),
                require("./men's cityscape/3.webp"),
                require("./men's cityscape/4.webp")
            ]
        },
        {
            
            id: '103',
            name: 'Everyday Move Slip-ons',
            price: 89.99,
            img: [
                require("./men's everyday move slip-ons/1.webp"),
                require("./men's everyday move slip-ons/2.webp"),
                require("./men's everyday move slip-ons/3.webp"),
                require("./men's everyday move slip-ons/4.webp")
            ]
        },
        {
            
            id: '104',
            name: 'Everyday Classic',
            price: 79.99,
            img: [
                require("./men's everyday classic/1.webp"),
                require("./men's everyday classic/2.webp"),
                require("./men's everyday classic/3.webp"),
                require("./men's everyday classic/4.webp")
            ]
        },
        {
            
            id: '105',
            name: 'Sunday Slippers',
            price: 39.99,
            img: [
                require("./men's sunday slippers/1.webp"),
                require("./men's sunday slippers/2.webp"),
                require("./men's sunday slippers/3.webp"),
                require("./men's sunday slippers/4.webp")
            ]
        }
    ],

    women: [
        {
            id: '201',
            name: 'Weekend',
            price: 49.99,
            img: [
                require("./women's weekend/1.webp"),
                require("./women's weekend/2.webp"),
                require("./women's weekend/3.webp"),
                require("./women's weekend/4.webp")
            ]
        },
        {
            id: '202',
            name: 'Cityscape',
            price: 59.99,
            img: [
                require("./women's cityscape/1.webp"),
                require("./women's cityscape/2.webp"),
                require("./women's cityscape/3.webp"),
                require("./women's cityscape/4.webp")
            ]
        },
        {
            id: '203',
            name: 'Everyday Move Slip-ons',
            price: 89.99,
            img: [
                require("./women's everyday move slip-ons/1.webp"),
                require("./women's everyday move slip-ons/2.webp"),
                require("./women's everyday move slip-ons/3.webp"),
                require("./women's everyday move slip-ons/4.webp")
            ]
        },
        {
            id: '204',
            name: 'Everyday Classic',
            price: 79.99,
            img: [
                require("./women's everyday classic/1.webp"),
                require("./women's everyday classic/2.webp"),
                require("./women's everyday classic/3.webp"),
                require("./women's everyday classic/4.webp")
            ]
        },
        {
            id: '205',
            name: 'Sunday Slippers',
            price: 39.99,
            img: [
                require("./women's sunday slippers/1.webp"),
                require("./women's sunday slippers/2.webp"),
                require("./women's sunday slippers/3.webp"),
                require("./women's sunday slippers/4.webp")
            ]
        }
    ]
}

function getAll() {
    return productData;
}

function getProduct(id) {
    let product;
    for(const cat in productData) {
        productData[cat].find(prod =>{
            if(prod.id === id) {
                product = prod;
                product.cat = cat;
            }
        })
    }

    return product
}

export {getAll, getProduct}