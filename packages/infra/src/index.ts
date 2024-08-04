export { User } from "@prisma/client";
import { db } from "./postgresql/service";

export const dbService = db;