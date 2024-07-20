import prisma from "../prismaClient.js";

export const getCrops = async(req, res) => {
  try {
    const { crop_type_id } = req.query;

    let condition = { include: { crop_type: true } };
    crop_type_id ? condition.where = { crop_type_id: Number(crop_type_id) } : condition;

    const crops = await prisma.crop.findMany(condition);
    res.json(crops);
  } catch (error) {
    console.error('Error fetching crops', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}