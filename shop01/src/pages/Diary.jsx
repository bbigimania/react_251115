import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import AlertModal from "../components/AlertModal";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  const { currentDiaryItem: curDiaryItem, alertOpen, setAlertOpen, onConfirmAlert } = useDiary(params.id);

  if (!curDiaryItem) {
    return (
      <>
        <AlertModal
          open={alertOpen}
          onClose={() => setAlertOpen(false)}
          onConfirm={onConfirmAlert}
          message={"존재하지 않는 일기입니다."}
          confirmText={"확인"}
        />
        <div>데이터 로딩중...!</div>
      </>
    );
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button
            onClick={() => nav(`/edit/${params.id}`)}
            text={"수정하기"}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};

export default Diary;