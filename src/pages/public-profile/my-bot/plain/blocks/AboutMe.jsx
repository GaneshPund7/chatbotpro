import clsx from 'clsx';

const AboutMe = ({ className }) => {
  return (
    <div className={clsx("gap-5", className)}>
      <div className="flex flex-col gap-5">
        <label className="checkbox-group mb-6">
          <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
          <span className="checkbox-label">Recursive</span>
        </label>
      </div>

      <div className="flex flex-col gap-5">
        <label className="checkbox-group mb-11">
          <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
          <span className="checkbox-label">Recursive</span>
        </label>
      </div>

      <div className="flex flex-col gap-5">
        <label className="checkbox-group mb-8">
          <input type="checkbox" className="checkbox checkbox-sm" value="1" readOnly />
          <span className="checkbox-label">Recursive</span>
        </label>
      </div>
    </div>
  );
};

export { AboutMe };
