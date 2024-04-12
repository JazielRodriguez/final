import { FormEvent, useRef } from "react";
interface Props {
  onClickForm: (x1:number,y1:number,x2:number,y2:number,x3:number,y3:number) => void

}
const Form: React.FC<Props> = (
  props
) => {
  const x1Ref = useRef<HTMLInputElement>(null);
  const y1Ref = useRef<HTMLInputElement>(null);
  const x2Ref = useRef<HTMLInputElement>(null);
  const y2Ref = useRef<HTMLInputElement>(null);
  const x3Ref = useRef<HTMLInputElement>(null);
  const y3Ref = useRef<HTMLInputElement>(null);
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    props.onClickForm(
      +x1Ref.current!.value,
      +y1Ref.current!.value,
      +x2Ref.current!.value,
      +y2Ref.current!.value,
      +x3Ref.current!.value,
      +y3Ref.current!.value
    );
  };
  return (
    <form
      className="flex flex-col gap-8 mx-auto w-[30%] py-16"
      onSubmit={submitHandler}
    >
      <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type="text"
          id="Username"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
          placeholder="Username"
          ref={x1Ref}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Coordenada X1
        </span>
      </label>
      <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type="text"
          id="Username"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
          placeholder="Username"
          ref={y1Ref}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Coordenada Y1
        </span>
      </label>
      <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type="text"
          id="Username"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
          placeholder="Username"
          ref={x2Ref}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Coordenada X2
        </span>
      </label>
      <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type="text"
          id="Username"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
          placeholder="Username"
          ref={y2Ref}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Coordenada Y2
        </span>
      </label>
      <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type="text"
          id="Username"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
          placeholder="Username"
          ref={x3Ref}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Coordenada X3
        </span>
      </label>
      <label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <input
          type="text"
          id="Username"
          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-2"
          placeholder="Username"
          ref={y3Ref}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Coordenada Y3
        </span>
      </label>

      <button className="group relative inline-block focus:outline-none focus:ring">
        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
          Calcular
        </span>
      </button>
    </form>
  );
};
export default Form;
