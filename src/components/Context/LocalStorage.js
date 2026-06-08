import react from "react";

function useLocalStorage(itemName, InitialValue = []) {
  const [item, setItem] = react.useState(InitialValue);
  const [loading, setLoading] = react.useState(true);
  const [error, setError] = react.useState(false);

  react.useEffect(() => {
    const localSotarageItem = localStorage.getItem(itemName);
    let parsedItem;

   
      try {
        if (!localSotarageItem) {
          localStorage.setItem(itemName, JSON.stringify(InitialValue));
          parsedItem = InitialValue;
        } else {
          parsedItem = JSON.parse(localSotarageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    
  }, []);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };