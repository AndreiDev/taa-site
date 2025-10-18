export function Textarea({ className = "", ...props }) {
    return (
      <textarea
        {...props}
        className={
          "border border-gray-300 rounded-md px-3 py-2 w-full outline-none " +
          "focus:ring focus:border-gray-400 " + className
        }
      />
    );
  }