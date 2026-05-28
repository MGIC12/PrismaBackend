import { prisma } from "./lib/prisma";

async function main() {
  // const item = await prisma.item.create({
  //   data: {
  //     name: "NVIDIA RTX 5070 12GB",
  //     category: "GPU",
  //     image:
  //       "https://www.nvidia.com/content/dam/nvidia/en-us/products/geforce/rtx-5070/rtx-5070-12gb/rtx-5070-12gb-01.jpg",
  //     shortDescription: "NVIDIA RTX 5070 12GB",
  //     fullDescription: "NVIDIA RTX 5070 12GB",
  //     technicalSpecs: "NVIDIA RTX 5070 12GB",
  //   },
  // });

  // console.log("Item created: ", item);

  // const item = await prisma.item.delete({
  //   where: {
  //     id: 2,
  //   },
  // });
  // console.log("Item deleted: ", item);

  const allItems = await prisma.item.findMany();

  console.log("Todos los items: ", JSON.stringify(allItems, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
