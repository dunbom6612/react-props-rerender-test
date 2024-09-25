import Child from './Child';

const date = new Date().toString();
export default function Parent() {
  console.log('rendering Parent', date.toString());

  return (
    <div>
      <Child timeString={date} />
    </div>
  );
}
