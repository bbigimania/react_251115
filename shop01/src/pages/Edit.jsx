import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext, useState } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";
import ConfirmModal from "../components/ConfirmModal";
import AlertModal from "../components/AlertModal";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const { currentDiaryItem: curDiaryItem, alertOpen, setAlertOpen, onConfirmAlert } = useDiary(params.id);

  const [deleteOpen, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [pendingInput, setPendingInput] = useState(null);

  const onClickDelete = () => {
    onDelete(params.id);
    nav("/", { replace: true });
  };

  const onSubmit = (input) => {
    setPendingInput(input);
    setEditOpen(true);
  };

  const handleConfirmEdit = () => {
    if (!pendingInput) {
      setEditOpen(false);
      return;
    }

    onUpdate(
      params.id,
      pendingInput.createdDate.getTime(),
      pendingInput.emotionId,
      pendingInput.content
    );
    setPendingInput(null);
    setEditOpen(false);
    nav("/", { replace: true });
  };

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

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightChild={
          <Button
            onClick={() => setOpen(true)}
            text={"삭제하기"}
            type={"NEGATIVE"}
          />
        }
      />
      <ConfirmModal
        open={deleteOpen}
        onClose={() => setOpen(false)}
        onConfirm={onClickDelete}
        message={"일기를 정말 삭제할까요? 다시 복구되지 않아요!"}
        confirmText={"삭제"}
      />
      <ConfirmModal
        open={editOpen}
        onClose={() => {
          setEditOpen(false);
          setPendingInput(null);
        }}
        onConfirm={handleConfirmEdit}
        message={"일기를 정말 수정할까요?"}
        confirmText={"수정"}
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;