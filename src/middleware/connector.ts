import { Request, Response, NextFunction } from "express";
import { contactConsultant, fetchVisaConsultants } from "../utils/apiHandlers";




export const connectorMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let apiData;

  switch (req.path) {
    case "/visa-consultants":
      try {
        const queryParams = req.query;
        apiData = await fetchVisaConsultants(queryParams);
        res.json(apiData);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch visa consultants" });
      }
      break;

    case "/contactVisaConsultant":
      try {
        const requestData = req.body;
        apiData = await contactConsultant(requestData);
        console.log("api", apiData);
        res.json(apiData);
      } catch (error) {
        res.status(500).json({ error: "Failed to contact consultant" });
      }
      break;

    default:
      res.status(404).json({ error: "Invalid endpoint" });
      break;
  }
};
