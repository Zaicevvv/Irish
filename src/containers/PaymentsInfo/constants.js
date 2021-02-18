export const STRIPE_KEY = process.env.NODE_ENV === 'development' ? "pk_test_51HJbLzHQ7BX3CickHgT2uboze6g4UUznL9OCYSo9lBFGGltRHlpwjPqRkhuPdN06iupv5P9yA1vUyHT4v4e0vDTM00E2qaw6aO" : 'pk_live_51Hf5iGIQPspGj7cCq4g0oTIHvC3SizRgqM55Ecb4BhijyNPcZXVoZCoEkvevMHcvTrhd5bIKHWoLcV4fvnE6zLYM00dAHdD0z8';
export const STRIPE_DEV_SECRET_KEY = "sk_test_51HJbLzHQ7BX3CickmfHHeWeHjxLDtjMgQ0XEfQWb9CAEBastn5GJR0iE2JTRD3SxfYKKE6lJpFQLmHkmxbSA3vTU002u08q5T0";
export const STRIPE_SECRET_KEY = "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";
export const SUBSCRIBE = 'subscriptions/subscribe';
export const GET_SUBSCRIPTIONS = 'subscriptions/get_subscriptions';
export const TOTAL_COST = 199 * 100;
export const SINGLE_COST = 49 * 100;
export const CURRENCY = 'EUR';