import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();
  const [alertOpen, setAlertOpen] = useState(false);

  const onConfirmAlert = () => {
    setAlertOpen(false);
    nav("/", { replace: true });
  };

  const currentDiaryItem = data.find(
    (item) => String(item.id) === String(id)
  );

  useEffect(() => {
    if (!currentDiaryItem) {
      setAlertOpen(true);
    } else {
      setAlertOpen(false);
    }
  }, [id, currentDiaryItem]);

  return { currentDiaryItem, alertOpen, setAlertOpen, onConfirmAlert };
};

export default useDiary;