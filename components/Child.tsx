export default function Child({ timeString }: { timeString: string }) {
  console.log('render child');

  return <div>{timeString}</div>;
}
