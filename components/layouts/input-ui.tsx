const InputUi = (props: any) => {
    return (
      <>
        <label className="xl:text-lg text-base text-paragraph" htmlFor={props.name}>
          {props.name}
        </label>
        <input
          className="bg-inputBg xl:h-14 lg:h-12 h-10 border-2 w-full"
          disabled={true}
          type="text"
          id={props.name}
        />
      </>
    );
}

export default InputUi