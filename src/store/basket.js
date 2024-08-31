import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useBasket = create(
  persist(
    (set, get) => ({
      items: [],
      invoice: {
        total: 0,
      },
      actions: {
        addItem(item, count = 1) {
          const alreadyExist = get().items.some((_item) => _item.id === item.id);

          if (alreadyExist) {
            return set((oldBasket) => ({
              invoice: { total: oldBasket.invoice.total + (count * item.price) },
              items: oldBasket.items.map((_item) => {
                if (_item.id === item.id) {
                  return {
                    ..._item,
                    quantity: _item.quantity + count,
                  };
                }
                return _item;
              }),
            }));
          } else {
            return set((oldBasket) => ({
              invoice: { total: oldBasket.invoice.total + (count * item.price) },
              items: [...oldBasket.items, { ...item, quantity: count }],
            }));
          }
        },
        removeItem(item) {
          return set((oldBasket) => {
            const updatedItems = oldBasket.items
              .map((_item) => {
                if (_item.id === item.id) {
                  return {
                    ..._item,
                    quantity: _item.quantity - 1,
                  };
                }
                return _item;
              })
              .filter((_item) => _item.quantity > 0); 

            const total = updatedItems.reduce((acc, _item) => acc + (_item.quantity * _item.price), 0);

            return {
              invoice: {
                total: total,
              },
              items: updatedItems,
            };
          });
        },
      },
    }),
    {
      name: "basketItems",
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !['actions'].includes(key))
        ),
    }
  )
);