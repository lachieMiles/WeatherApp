import { Router, type Request, type Response } from 'express';
const router = Router();


import HistoryService from '../../service/historyService.js';
import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  router.post('/', (req: Request, res: Response) => {
    try {
      const cityName = req.body.cityName;
      WeatherService.getWeatherForCity(cityName).then((data: any) => {
        HistoryService.addCity(cityName);
        res.json(data);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  });
  // TODO: save city to search history
  HistoryService.getCities()
  .then((data: any) => {
    return res.json(data);
  })
  .catch((err: any): any => {
    res.status(500).json(err);
  });
});

// TODO: GET search history
router.get('/history', async (req: Request, res: Response) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;
