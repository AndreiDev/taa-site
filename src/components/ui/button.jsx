export function Button({ className = "", ...props }) {
    return (
      <button
        {...props}
        className={
          "inline-flex items-center justify-center px-4 py-2 rounded-md " +
          "focus:outline-none focus:ring " + className
        }
      />
    );
  }