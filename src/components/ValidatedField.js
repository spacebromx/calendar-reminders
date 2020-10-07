import React, {Fragment} from 'react';
import {useField} from "formik";
import cx from 'classnames'

const ValidatedField = ({...props}) => {
  const [field, meta] = useField(props)
  const isInvalid = meta.error && meta.touched

  return (
    <Fragment>
      <input
        {...field}
        {...props}
        className={cx(
          'rounded bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500',
          {'border-red-400': isInvalid}
        )}
      />
      {isInvalid ? (
        <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          {meta.error}
        </div>
      ) : null}
    </Fragment>
  );
};

export default ValidatedField;
