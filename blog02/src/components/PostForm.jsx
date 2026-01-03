function PostForm({
  title,
  setTitle,
  content,
  setContent,
  category,
  setCategory,
}) {
  return (
    <div className="space-y-4">
      <input
        className="border bg-sky-50 p-2 w-full"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="제목을 입력하세요"
      />

      <textarea
        className="border bg-sky-50 p-2 w-full"
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="내용을 입력하세요"
      />

      <select
        className="border bg-sky-50 p-2 rounded"
        value={category}
        onChange={e => setCategory(e.target.value)}
      >
        <option value="react">React</option>
        <option value="router">Router</option>
        <option value="css">CSS</option>
      </select>
    </div>
  );
}

export default PostForm;