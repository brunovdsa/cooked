import { useState } from 'react';
import { api, apiKey } from '../../services/api';

export default function Main() {
  const [result, setResult] = useState<any[]>([]);

  const response: any = api.get(`/complexSearch?query=fish&apiKey=${apiKey}`);

  setResult(response);

  console.log(result);
}
