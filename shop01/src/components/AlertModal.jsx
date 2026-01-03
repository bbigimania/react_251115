import { useEffect } from 'react';

function AlertModal({
  open,
  onClose,
  onConfirm,
  message,
  confirmText,
}) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        onConfirm && onConfirm();
      } else if (e.key === 'Escape') {
        onClose && onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onConfirm, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <p className="mb-4">{message}</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 border bg-gray-300 rounded">취소</button>
          <button onClick={onConfirm} className="px-4 py-2 border bg-red-500 text-white rounded" autoFocus>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}

export default AlertModal;