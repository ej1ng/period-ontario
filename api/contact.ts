import { handleContact } from '../server/routes/contact';

export default function handler(req: unknown, res: unknown) {
  return handleContact(req as never, res as never, () => undefined);
}
