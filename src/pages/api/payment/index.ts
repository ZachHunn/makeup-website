import { NextApiRequest, NextApiResponse } from 'next';
import { ApiError, ApiResponse } from 'square';
import { client } from '../../../../utils/squareClient';

const paymentApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  // if(req.body !== 'GET'){
  //   throw new Error('Method not allowed')
  // }
  const test = (await client.catalogApi.listCatalog()).result;
  console.log(test);
};

export default paymentApiHandler;
