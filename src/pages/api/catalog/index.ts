import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../../utils/squareClient';
import { CatalogObject } from 'square';
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

type myRespone<T> =
  | {
      err: string;
    }
  | {
      data: T;
    };

const catalogItemApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<myRespone<CatalogObject[] | string | undefined>>,
) => {
  if (req.method !== 'GET') {
    throw new Error('Method Not Allowed');
  }

  const catalogList = (await client.catalogApi.listCatalog()).result.objects;

  return res.status(200).json({ data: catalogList });
};

export default catalogItemApiHandler;
