const InputUi = (props: any) => {
    return (
      <>
        <label className="text-base text-paragraph" htmlFor={props.name}>
          {props.name}
        </label>
        <input
          className="bg-inputBg xl:h-12 lg:h-10 h-8 border-2 w-full"
          disabled={true}
          type="text"
          id={props.name}
        />
      </>
    );
}

export default InputUi