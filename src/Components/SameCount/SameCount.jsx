const SameCount = ({ count, setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Same Count : {count}</button>
      <button onClick={() => setCount(count + 1)}>Same Count : {count}</button>
    </div>
  );
};

export default SameCount;
