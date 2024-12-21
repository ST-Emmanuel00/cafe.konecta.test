import { db } from "../src/common/config/index.js";

async function main() {

    await db.sale.deleteMany();
    await db.product.deleteMany();

    console.log("Seeding data...");
    const products = await db.product.createMany({
        data: [
            { name: "Café Americano", reference: "CA1001", price: 3000, weight: 250, category: "Bebidas", stock: 20 },
            { name: "Capuchino", reference: "CP2002", price: 3500, weight: 250, category: "Bebidas", stock: 15 },
            { name: "Croissant", reference: "CR3003", price: 2000, weight: 100, category: "Panadería", stock: 25 },
            { name: "Tarta de Queso", reference: "TQ4004", price: 4500, weight: 200, category: "Postres", stock: 10 },
            { name: "Sandwich Jamón y Queso", reference: "SJ5005", price: 4000, weight: 300, category: "Snacks", stock: 18 },
        ],
    });


    const americano = await db.product.findFirst({ where: { reference: "CA1001" } });
    const capuchino = await db.product.findFirst({ where: { reference: "CP2002" } });

    const sales = await db.sale.createMany({
        data: [
            { productId: americano.id, quantity: 2 },
            { productId: capuchino.id, quantity: 3 },
            { productId: americano.id, quantity: 1 },
        ],
    });
    console.log("Data seeded successfully!");

}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    });
