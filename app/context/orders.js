import { createGlobalHook } from '@devhammed/use-global-hook';
import { useState } from 'react';

const activeOrder = [
  {
    id: 111,
    status: 'active',
    service: 'Wash Only',
    Guy: [
      {
        name: 'Agbada',
        quantity: 53,
        rate: 300,
      },
      {
        name: 'Trouser',
        quantity: 5,
        rate: 150,
      },
    ],
    Lady: [
      {
        name: 'Shirt',
        quantity: 1,
        rate: 200,
      },
      {
        name: 'T-Shirt',
        quantity: 6,
        rate: 220,
      },
    ],
    Kid: {},
    Household: {},
  },
  {
    id: 121,
    status: 'active',
    service: 'Iron Only',
    Guy: [
      {
        name: 'Agbada',
        quantity: 53,
        rate: 300,
      },
      {
        name: 'Trouser',
        quantity: 5,
        rate: 150,
      },
    ],
    Lady: [
      {
        name: 'Shirt',
        quantity: 1,
        rate: 200,
      },
      {
        name: 'T-Shirt',
        quantity: 6,
        rate: 220,
      },
    ],
    Kid: {},
    Household: {},
  },
  {
    id: 129,
    status: 'active',
    service: 'Wash & Iron',
    Guy: [
      {
        name: 'Agbada',
        quantity: 53,
        rate: 300,
      },
      {
        name: 'Trouser',
        quantity: 5,
        rate: 150,
      },
    ],
    Lady: [
      {
        name: 'Shirt',
        quantity: 1,
        rate: 200,
      },
      {
        name: 'T-Shirt',
        quantity: 6,
        rate: 220,
      },
    ],
    Kid: {},
    Household: {},
  },
];

export const orderStore = createGlobalHook('orderStore', () => {
  const [pendingOrder, setPendingOrder] = useState([]);
  const [activeOrder, setActiveOrder] = useState([]);
  const [deliveredOrder, setDeliveredOrder] = useState([]);

  const _setPendingOrder = (order) => setPendingOrder([...pendingOrder, order]);
  const _setActiveOrder = (order) => setActiveOrder([...activeOrder, order]);
  const _setDeliveredOrder = (order) =>
    setDeliveredOrder([...deliveredOrder, order]);

  return {
    pendingOrder,
    activeOrder,
    deliveredOrder,
    _setPendingOrder,
    _setActiveOrder,
    _setDeliveredOrder,
  };
});
