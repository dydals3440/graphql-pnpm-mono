interface IErrorFallback {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: IErrorFallback) {
  return (
    <div>
      <h1>
        {isApiError(error)
          ? error.response.errors[0].message
          : 'something is wrong'}
      </h1>
      <button onClick={() => resetErrorBoundary()}>Try Again</button>
    </div>
  );
}

// error가 API 에러인지 아닌지를 구분

function isApiError(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any
): error is { response: { errors: { message: string }[] } } {
  return error.response?.errors?.length > 0;
}
