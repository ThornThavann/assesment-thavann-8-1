import prisma from "../prismaClient.js";

export const getCropTypes = async(req, res) => {
  try {
    const cropTypes = await prisma.crop_type.findMany();
    res.json(cropTypes);
  } catch (error) {
    console.error('Error fetching crop types', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}