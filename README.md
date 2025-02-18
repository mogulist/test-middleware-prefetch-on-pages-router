# Minimal reproducible example of strange behavior of prefetch in pages router regading middleware

This project demonstrates the behavior of prefetch in Next.js pages router with and without middleware.

`/posts` contains links to static pages. Prefetch works correctly regardless of the presence of middleware.

`/posts-ssr` contains links to SSR pages. Without middleware, prefetch does not occur. When middleware is added, prefetch occurs, but the response is an empty object. If the x-middleware-prefetch header is removed in the middleware, prefetch for SSR pages correctly retrieves data.
