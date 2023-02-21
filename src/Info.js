import { useState } from "react";

const Info = () => {
  const [form, setForm] = useState({
    name: "",
    nickname: "",
  });
  const onChange = (e) => {
    const nextForm = { ...form };
    nextForm[e.target.name] = e.target.value;
    setForm(nextForm);
  };
  return (
    <div>
      <div>
        <input name="name" value={form.name} onChange={onChange} />
        <input name="nickname" value={form.nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {form.name}
        </div>
        <div>
          <b>닉네임:</b> {form.nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
