import { create } from "zustand";

export const useTransaction = create((set) => ({
  savedTransactions: [],
  transactions: [
    {
      value: "",
      typeOfTransaction: "",
      date: "",
      category: "",
      description: "",
    },
  ],
  handleChange: (event) => {
    const { name, value } = event.target;
    set((state) => ({
      transactions: state.transactions.map((transaction, index) => {
        if (index === 0) {
          return {
            ...transaction,
            [name]: value,
          };
        }
        return transaction;
      }),
    }));
  },
  handleSaveTransaction: () => {
    set((state) => ({
      savedTransactions: [
        ...state.savedTransactions,
        {
          ...state.transactions[0],
          value: Number(state.transactions[0].value),
        },
      ],
      transactions: [
        {
          value: "",
          typeOfTransaction: "",
          date: "",
          category: "",
          description: "",
        },
      ],
    }));
  },
}));
