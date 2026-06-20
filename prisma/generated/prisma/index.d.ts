
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserApiKey
 * 
 */
export type UserApiKey = $Result.DefaultSelection<Prisma.$UserApiKeyPayload>
/**
 * Model Prompt
 * 
 */
export type Prompt = $Result.DefaultSelection<Prisma.$PromptPayload>
/**
 * Model Evaluation
 * 
 */
export type Evaluation = $Result.DefaultSelection<Prisma.$EvaluationPayload>
/**
 * Model PromptTemplate
 * 
 */
export type PromptTemplate = $Result.DefaultSelection<Prisma.$PromptTemplatePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model UsageRecord
 * 
 */
export type UsageRecord = $Result.DefaultSelection<Prisma.$UsageRecordPayload>
/**
 * Model FeatureFlag
 * 
 */
export type FeatureFlag = $Result.DefaultSelection<Prisma.$FeatureFlagPayload>
/**
 * Model RateLimitCounter
 * 
 */
export type RateLimitCounter = $Result.DefaultSelection<Prisma.$RateLimitCounterPayload>
/**
 * Model EmailJob
 * 
 */
export type EmailJob = $Result.DefaultSelection<Prisma.$EmailJobPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LLMProvider: {
  CLAUDE: 'CLAUDE',
  OPENAI: 'OPENAI',
  MISTRAL: 'MISTRAL',
  QWEN: 'QWEN',
  GROK: 'GROK',
  LOCAL: 'LOCAL'
};

export type LLMProvider = (typeof LLMProvider)[keyof typeof LLMProvider]


export const TaskType: {
  CODING: 'CODING',
  EMAIL: 'EMAIL',
  ANALYSIS: 'ANALYSIS',
  CREATIVE: 'CREATIVE',
  RESEARCH: 'RESEARCH',
  BUSINESS: 'BUSINESS',
  EDUCATION: 'EDUCATION',
  MARKETING: 'MARKETING',
  GENERAL: 'GENERAL'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const PromptTone: {
  PROFESSIONAL: 'PROFESSIONAL',
  CASUAL: 'CASUAL',
  TECHNICAL: 'TECHNICAL',
  ACADEMIC: 'ACADEMIC',
  CREATIVE: 'CREATIVE',
  PERSUASIVE: 'PERSUASIVE'
};

export type PromptTone = (typeof PromptTone)[keyof typeof PromptTone]


export const OutputFormat: {
  DETAILED: 'DETAILED',
  CONCISE: 'CONCISE',
  STRUCTURED: 'STRUCTURED',
  STEP_BY_STEP: 'STEP_BY_STEP',
  CONVERSATIONAL: 'CONVERSATIONAL'
};

export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat]


export const TemplateCategory: {
  CODING: 'CODING',
  EMAIL: 'EMAIL',
  ANALYSIS: 'ANALYSIS',
  CREATIVE: 'CREATIVE',
  RESEARCH: 'RESEARCH',
  BUSINESS: 'BUSINESS',
  EDUCATION: 'EDUCATION',
  MARKETING: 'MARKETING'
};

export type TemplateCategory = (typeof TemplateCategory)[keyof typeof TemplateCategory]


export const SubscriptionTier: {
  GRATIS: 'GRATIS',
  PRO: 'PRO',
  TIM: 'TIM',
  ENTERPRISE: 'ENTERPRISE'
};

export type SubscriptionTier = (typeof SubscriptionTier)[keyof typeof SubscriptionTier]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  TRIALING: 'TRIALING',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED',
  EXPIRED: 'EXPIRED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const BillingInterval: {
  MONTHLY: 'MONTHLY',
  ANNUAL: 'ANNUAL'
};

export type BillingInterval = (typeof BillingInterval)[keyof typeof BillingInterval]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED',
  EXPIRED: 'EXPIRED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  CREDIT_CARD: 'CREDIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  EWALLET_GOPAY: 'EWALLET_GOPAY',
  EWALLET_OVO: 'EWALLET_OVO',
  EWALLET_DANA: 'EWALLET_DANA',
  EWALLET_SHOPEEPAY: 'EWALLET_SHOPEEPAY',
  QRIS: 'QRIS'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const UsageType: {
  TRANSFORM: 'TRANSFORM',
  OPTIMIZE: 'OPTIMIZE',
  EVALUATE: 'EVALUATE',
  RECOMMEND: 'RECOMMEND'
};

export type UsageType = (typeof UsageType)[keyof typeof UsageType]


export const RateLimitScope: {
  IP: 'IP',
  EMAIL: 'EMAIL'
};

export type RateLimitScope = (typeof RateLimitScope)[keyof typeof RateLimitScope]


export const EmailJobType: {
  WELCOME: 'WELCOME'
};

export type EmailJobType = (typeof EmailJobType)[keyof typeof EmailJobType]


export const EmailJobStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  RETRYING: 'RETRYING',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type EmailJobStatus = (typeof EmailJobStatus)[keyof typeof EmailJobStatus]

}

export type LLMProvider = $Enums.LLMProvider

export const LLMProvider: typeof $Enums.LLMProvider

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type PromptTone = $Enums.PromptTone

export const PromptTone: typeof $Enums.PromptTone

export type OutputFormat = $Enums.OutputFormat

export const OutputFormat: typeof $Enums.OutputFormat

export type TemplateCategory = $Enums.TemplateCategory

export const TemplateCategory: typeof $Enums.TemplateCategory

export type SubscriptionTier = $Enums.SubscriptionTier

export const SubscriptionTier: typeof $Enums.SubscriptionTier

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type BillingInterval = $Enums.BillingInterval

export const BillingInterval: typeof $Enums.BillingInterval

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type UsageType = $Enums.UsageType

export const UsageType: typeof $Enums.UsageType

export type RateLimitScope = $Enums.RateLimitScope

export const RateLimitScope: typeof $Enums.RateLimitScope

export type EmailJobType = $Enums.EmailJobType

export const EmailJobType: typeof $Enums.EmailJobType

export type EmailJobStatus = $Enums.EmailJobStatus

export const EmailJobStatus: typeof $Enums.EmailJobStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userApiKey`: Exposes CRUD operations for the **UserApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserApiKeys
    * const userApiKeys = await prisma.userApiKey.findMany()
    * ```
    */
  get userApiKey(): Prisma.UserApiKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prompt`: Exposes CRUD operations for the **Prompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompt.findMany()
    * ```
    */
  get prompt(): Prisma.PromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evaluation`: Exposes CRUD operations for the **Evaluation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Evaluations
    * const evaluations = await prisma.evaluation.findMany()
    * ```
    */
  get evaluation(): Prisma.EvaluationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promptTemplate`: Exposes CRUD operations for the **PromptTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptTemplates
    * const promptTemplates = await prisma.promptTemplate.findMany()
    * ```
    */
  get promptTemplate(): Prisma.PromptTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usageRecord`: Exposes CRUD operations for the **UsageRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageRecords
    * const usageRecords = await prisma.usageRecord.findMany()
    * ```
    */
  get usageRecord(): Prisma.UsageRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.featureFlag`: Exposes CRUD operations for the **FeatureFlag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeatureFlags
    * const featureFlags = await prisma.featureFlag.findMany()
    * ```
    */
  get featureFlag(): Prisma.FeatureFlagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rateLimitCounter`: Exposes CRUD operations for the **RateLimitCounter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RateLimitCounters
    * const rateLimitCounters = await prisma.rateLimitCounter.findMany()
    * ```
    */
  get rateLimitCounter(): Prisma.RateLimitCounterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailJob`: Exposes CRUD operations for the **EmailJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailJobs
    * const emailJobs = await prisma.emailJob.findMany()
    * ```
    */
  get emailJob(): Prisma.EmailJobDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserApiKey: 'UserApiKey',
    Prompt: 'Prompt',
    Evaluation: 'Evaluation',
    PromptTemplate: 'PromptTemplate',
    Subscription: 'Subscription',
    Payment: 'Payment',
    UsageRecord: 'UsageRecord',
    FeatureFlag: 'FeatureFlag',
    RateLimitCounter: 'RateLimitCounter',
    EmailJob: 'EmailJob'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userApiKey" | "prompt" | "evaluation" | "promptTemplate" | "subscription" | "payment" | "usageRecord" | "featureFlag" | "rateLimitCounter" | "emailJob"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserApiKey: {
        payload: Prisma.$UserApiKeyPayload<ExtArgs>
        fields: Prisma.UserApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          findFirst: {
            args: Prisma.UserApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          findMany: {
            args: Prisma.UserApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>[]
          }
          create: {
            args: Prisma.UserApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          createMany: {
            args: Prisma.UserApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>[]
          }
          delete: {
            args: Prisma.UserApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          update: {
            args: Prisma.UserApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.UserApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserApiKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>[]
          }
          upsert: {
            args: Prisma.UserApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiKeyPayload>
          }
          aggregate: {
            args: Prisma.UserApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserApiKey>
          }
          groupBy: {
            args: Prisma.UserApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<UserApiKeyCountAggregateOutputType> | number
          }
        }
      }
      Prompt: {
        payload: Prisma.$PromptPayload<ExtArgs>
        fields: Prisma.PromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findFirst: {
            args: Prisma.PromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findMany: {
            args: Prisma.PromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          create: {
            args: Prisma.PromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          createMany: {
            args: Prisma.PromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          delete: {
            args: Prisma.PromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          update: {
            args: Prisma.PromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          deleteMany: {
            args: Prisma.PromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          upsert: {
            args: Prisma.PromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          aggregate: {
            args: Prisma.PromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrompt>
          }
          groupBy: {
            args: Prisma.PromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptCountArgs<ExtArgs>
            result: $Utils.Optional<PromptCountAggregateOutputType> | number
          }
        }
      }
      Evaluation: {
        payload: Prisma.$EvaluationPayload<ExtArgs>
        fields: Prisma.EvaluationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EvaluationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EvaluationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findFirst: {
            args: Prisma.EvaluationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EvaluationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          findMany: {
            args: Prisma.EvaluationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          create: {
            args: Prisma.EvaluationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          createMany: {
            args: Prisma.EvaluationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EvaluationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          delete: {
            args: Prisma.EvaluationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          update: {
            args: Prisma.EvaluationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          deleteMany: {
            args: Prisma.EvaluationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EvaluationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EvaluationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>[]
          }
          upsert: {
            args: Prisma.EvaluationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EvaluationPayload>
          }
          aggregate: {
            args: Prisma.EvaluationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvaluation>
          }
          groupBy: {
            args: Prisma.EvaluationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EvaluationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EvaluationCountArgs<ExtArgs>
            result: $Utils.Optional<EvaluationCountAggregateOutputType> | number
          }
        }
      }
      PromptTemplate: {
        payload: Prisma.$PromptTemplatePayload<ExtArgs>
        fields: Prisma.PromptTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findFirst: {
            args: Prisma.PromptTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          findMany: {
            args: Prisma.PromptTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          create: {
            args: Prisma.PromptTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          createMany: {
            args: Prisma.PromptTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          delete: {
            args: Prisma.PromptTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          update: {
            args: Prisma.PromptTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          deleteMany: {
            args: Prisma.PromptTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>[]
          }
          upsert: {
            args: Prisma.PromptTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptTemplatePayload>
          }
          aggregate: {
            args: Prisma.PromptTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptTemplate>
          }
          groupBy: {
            args: Prisma.PromptTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<PromptTemplateCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      UsageRecord: {
        payload: Prisma.$UsageRecordPayload<ExtArgs>
        fields: Prisma.UsageRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload>
          }
          findFirst: {
            args: Prisma.UsageRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload>
          }
          findMany: {
            args: Prisma.UsageRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload>[]
          }
          create: {
            args: Prisma.UsageRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload>
          }
          createMany: {
            args: Prisma.UsageRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload>[]
          }
          delete: {
            args: Prisma.UsageRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload>
          }
          update: {
            args: Prisma.UsageRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload>
          }
          deleteMany: {
            args: Prisma.UsageRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsageRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload>[]
          }
          upsert: {
            args: Prisma.UsageRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageRecordPayload>
          }
          aggregate: {
            args: Prisma.UsageRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageRecord>
          }
          groupBy: {
            args: Prisma.UsageRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageRecordCountArgs<ExtArgs>
            result: $Utils.Optional<UsageRecordCountAggregateOutputType> | number
          }
        }
      }
      FeatureFlag: {
        payload: Prisma.$FeatureFlagPayload<ExtArgs>
        fields: Prisma.FeatureFlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeatureFlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeatureFlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          findFirst: {
            args: Prisma.FeatureFlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeatureFlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          findMany: {
            args: Prisma.FeatureFlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>[]
          }
          create: {
            args: Prisma.FeatureFlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          createMany: {
            args: Prisma.FeatureFlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeatureFlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>[]
          }
          delete: {
            args: Prisma.FeatureFlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          update: {
            args: Prisma.FeatureFlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          deleteMany: {
            args: Prisma.FeatureFlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeatureFlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeatureFlagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>[]
          }
          upsert: {
            args: Prisma.FeatureFlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeatureFlagPayload>
          }
          aggregate: {
            args: Prisma.FeatureFlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeatureFlag>
          }
          groupBy: {
            args: Prisma.FeatureFlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeatureFlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeatureFlagCountArgs<ExtArgs>
            result: $Utils.Optional<FeatureFlagCountAggregateOutputType> | number
          }
        }
      }
      RateLimitCounter: {
        payload: Prisma.$RateLimitCounterPayload<ExtArgs>
        fields: Prisma.RateLimitCounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateLimitCounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateLimitCounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload>
          }
          findFirst: {
            args: Prisma.RateLimitCounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateLimitCounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload>
          }
          findMany: {
            args: Prisma.RateLimitCounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload>[]
          }
          create: {
            args: Prisma.RateLimitCounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload>
          }
          createMany: {
            args: Prisma.RateLimitCounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateLimitCounterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload>[]
          }
          delete: {
            args: Prisma.RateLimitCounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload>
          }
          update: {
            args: Prisma.RateLimitCounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload>
          }
          deleteMany: {
            args: Prisma.RateLimitCounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateLimitCounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateLimitCounterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload>[]
          }
          upsert: {
            args: Prisma.RateLimitCounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateLimitCounterPayload>
          }
          aggregate: {
            args: Prisma.RateLimitCounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRateLimitCounter>
          }
          groupBy: {
            args: Prisma.RateLimitCounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateLimitCounterGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateLimitCounterCountArgs<ExtArgs>
            result: $Utils.Optional<RateLimitCounterCountAggregateOutputType> | number
          }
        }
      }
      EmailJob: {
        payload: Prisma.$EmailJobPayload<ExtArgs>
        fields: Prisma.EmailJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload>
          }
          findFirst: {
            args: Prisma.EmailJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload>
          }
          findMany: {
            args: Prisma.EmailJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload>[]
          }
          create: {
            args: Prisma.EmailJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload>
          }
          createMany: {
            args: Prisma.EmailJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload>[]
          }
          delete: {
            args: Prisma.EmailJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload>
          }
          update: {
            args: Prisma.EmailJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload>
          }
          deleteMany: {
            args: Prisma.EmailJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailJobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload>[]
          }
          upsert: {
            args: Prisma.EmailJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailJobPayload>
          }
          aggregate: {
            args: Prisma.EmailJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailJob>
          }
          groupBy: {
            args: Prisma.EmailJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailJobCountArgs<ExtArgs>
            result: $Utils.Optional<EmailJobCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userApiKey?: UserApiKeyOmit
    prompt?: PromptOmit
    evaluation?: EvaluationOmit
    promptTemplate?: PromptTemplateOmit
    subscription?: SubscriptionOmit
    payment?: PaymentOmit
    usageRecord?: UsageRecordOmit
    featureFlag?: FeatureFlagOmit
    rateLimitCounter?: RateLimitCounterOmit
    emailJob?: EmailJobOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    prompts: number
    evaluations: number
    apiKeys: number
    usageRecords: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | UserCountOutputTypeCountPromptsArgs
    evaluations?: boolean | UserCountOutputTypeCountEvaluationsArgs
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs
    usageRecords?: boolean | UserCountOutputTypeCountUsageRecordsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApiKeyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsageRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageRecordWhereInput
  }


  /**
   * Count Type PromptCountOutputType
   */

  export type PromptCountOutputType = {
    evaluations: number
  }

  export type PromptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evaluations?: boolean | PromptCountOutputTypeCountEvaluationsArgs
  }

  // Custom InputTypes
  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptCountOutputType
     */
    select?: PromptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeCountEvaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payments: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    supabaseId: string | null
    avatarUrl: string | null
    locale: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    supabaseId: string | null
    avatarUrl: string | null
    locale: string | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    supabaseId: number
    avatarUrl: number
    locale: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    supabaseId?: true
    avatarUrl?: true
    locale?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    supabaseId?: true
    avatarUrl?: true
    locale?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    supabaseId?: true
    avatarUrl?: true
    locale?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    supabaseId: string
    avatarUrl: string | null
    locale: string
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    supabaseId?: boolean
    avatarUrl?: boolean
    locale?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    prompts?: boolean | User$promptsArgs<ExtArgs>
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    usageRecords?: boolean | User$usageRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    supabaseId?: boolean
    avatarUrl?: boolean
    locale?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    supabaseId?: boolean
    avatarUrl?: boolean
    locale?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    supabaseId?: boolean
    avatarUrl?: boolean
    locale?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "supabaseId" | "avatarUrl" | "locale" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompts?: boolean | User$promptsArgs<ExtArgs>
    evaluations?: boolean | User$evaluationsArgs<ExtArgs>
    apiKeys?: boolean | User$apiKeysArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    usageRecords?: boolean | User$usageRecordsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      prompts: Prisma.$PromptPayload<ExtArgs>[]
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
      apiKeys: Prisma.$UserApiKeyPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      usageRecords: Prisma.$UsageRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      supabaseId: string
      avatarUrl: string | null
      locale: string
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompts<T extends User$promptsArgs<ExtArgs> = {}>(args?: Subset<T, User$promptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    evaluations<T extends User$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, User$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    apiKeys<T extends User$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usageRecords<T extends User$usageRecordsArgs<ExtArgs> = {}>(args?: Subset<T, User$usageRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly supabaseId: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly locale: FieldRef<"User", 'String'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.prompts
   */
  export type User$promptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    cursor?: PromptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * User.evaluations
   */
  export type User$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * User.apiKeys
   */
  export type User$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    where?: UserApiKeyWhereInput
    orderBy?: UserApiKeyOrderByWithRelationInput | UserApiKeyOrderByWithRelationInput[]
    cursor?: UserApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserApiKeyScalarFieldEnum | UserApiKeyScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.usageRecords
   */
  export type User$usageRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    where?: UsageRecordWhereInput
    orderBy?: UsageRecordOrderByWithRelationInput | UsageRecordOrderByWithRelationInput[]
    cursor?: UsageRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageRecordScalarFieldEnum | UsageRecordScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserApiKey
   */

  export type AggregateUserApiKey = {
    _count: UserApiKeyCountAggregateOutputType | null
    _min: UserApiKeyMinAggregateOutputType | null
    _max: UserApiKeyMaxAggregateOutputType | null
  }

  export type UserApiKeyMinAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.LLMProvider | null
    encryptedKey: string | null
    iv: string | null
    authTag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserApiKeyMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    provider: $Enums.LLMProvider | null
    encryptedKey: string | null
    iv: string | null
    authTag: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserApiKeyCountAggregateOutputType = {
    id: number
    userId: number
    provider: number
    encryptedKey: number
    iv: number
    authTag: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserApiKeyMinAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    encryptedKey?: true
    iv?: true
    authTag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserApiKeyMaxAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    encryptedKey?: true
    iv?: true
    authTag?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserApiKeyCountAggregateInputType = {
    id?: true
    userId?: true
    provider?: true
    encryptedKey?: true
    iv?: true
    authTag?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApiKey to aggregate.
     */
    where?: UserApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiKeys to fetch.
     */
    orderBy?: UserApiKeyOrderByWithRelationInput | UserApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserApiKeys
    **/
    _count?: true | UserApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserApiKeyMaxAggregateInputType
  }

  export type GetUserApiKeyAggregateType<T extends UserApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateUserApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserApiKey[P]>
      : GetScalarType<T[P], AggregateUserApiKey[P]>
  }




  export type UserApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApiKeyWhereInput
    orderBy?: UserApiKeyOrderByWithAggregationInput | UserApiKeyOrderByWithAggregationInput[]
    by: UserApiKeyScalarFieldEnum[] | UserApiKeyScalarFieldEnum
    having?: UserApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserApiKeyCountAggregateInputType | true
    _min?: UserApiKeyMinAggregateInputType
    _max?: UserApiKeyMaxAggregateInputType
  }

  export type UserApiKeyGroupByOutputType = {
    id: string
    userId: string
    provider: $Enums.LLMProvider
    encryptedKey: string
    iv: string
    authTag: string
    createdAt: Date
    updatedAt: Date
    _count: UserApiKeyCountAggregateOutputType | null
    _min: UserApiKeyMinAggregateOutputType | null
    _max: UserApiKeyMaxAggregateOutputType | null
  }

  type GetUserApiKeyGroupByPayload<T extends UserApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], UserApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type UserApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    encryptedKey?: boolean
    iv?: boolean
    authTag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiKey"]>

  export type UserApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    encryptedKey?: boolean
    iv?: boolean
    authTag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiKey"]>

  export type UserApiKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    provider?: boolean
    encryptedKey?: boolean
    iv?: boolean
    authTag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiKey"]>

  export type UserApiKeySelectScalar = {
    id?: boolean
    userId?: boolean
    provider?: boolean
    encryptedKey?: boolean
    iv?: boolean
    authTag?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserApiKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "provider" | "encryptedKey" | "iv" | "authTag" | "createdAt" | "updatedAt", ExtArgs["result"]["userApiKey"]>
  export type UserApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserApiKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserApiKey"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      provider: $Enums.LLMProvider
      encryptedKey: string
      iv: string
      authTag: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userApiKey"]>
    composites: {}
  }

  type UserApiKeyGetPayload<S extends boolean | null | undefined | UserApiKeyDefaultArgs> = $Result.GetResult<Prisma.$UserApiKeyPayload, S>

  type UserApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserApiKeyCountAggregateInputType | true
    }

  export interface UserApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserApiKey'], meta: { name: 'UserApiKey' } }
    /**
     * Find zero or one UserApiKey that matches the filter.
     * @param {UserApiKeyFindUniqueArgs} args - Arguments to find a UserApiKey
     * @example
     * // Get one UserApiKey
     * const userApiKey = await prisma.userApiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserApiKeyFindUniqueArgs>(args: SelectSubset<T, UserApiKeyFindUniqueArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserApiKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserApiKeyFindUniqueOrThrowArgs} args - Arguments to find a UserApiKey
     * @example
     * // Get one UserApiKey
     * const userApiKey = await prisma.userApiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, UserApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyFindFirstArgs} args - Arguments to find a UserApiKey
     * @example
     * // Get one UserApiKey
     * const userApiKey = await prisma.userApiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserApiKeyFindFirstArgs>(args?: SelectSubset<T, UserApiKeyFindFirstArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyFindFirstOrThrowArgs} args - Arguments to find a UserApiKey
     * @example
     * // Get one UserApiKey
     * const userApiKey = await prisma.userApiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, UserApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserApiKeys
     * const userApiKeys = await prisma.userApiKey.findMany()
     * 
     * // Get first 10 UserApiKeys
     * const userApiKeys = await prisma.userApiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userApiKeyWithIdOnly = await prisma.userApiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserApiKeyFindManyArgs>(args?: SelectSubset<T, UserApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserApiKey.
     * @param {UserApiKeyCreateArgs} args - Arguments to create a UserApiKey.
     * @example
     * // Create one UserApiKey
     * const UserApiKey = await prisma.userApiKey.create({
     *   data: {
     *     // ... data to create a UserApiKey
     *   }
     * })
     * 
     */
    create<T extends UserApiKeyCreateArgs>(args: SelectSubset<T, UserApiKeyCreateArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserApiKeys.
     * @param {UserApiKeyCreateManyArgs} args - Arguments to create many UserApiKeys.
     * @example
     * // Create many UserApiKeys
     * const userApiKey = await prisma.userApiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserApiKeyCreateManyArgs>(args?: SelectSubset<T, UserApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserApiKeys and returns the data saved in the database.
     * @param {UserApiKeyCreateManyAndReturnArgs} args - Arguments to create many UserApiKeys.
     * @example
     * // Create many UserApiKeys
     * const userApiKey = await prisma.userApiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserApiKeys and only return the `id`
     * const userApiKeyWithIdOnly = await prisma.userApiKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, UserApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserApiKey.
     * @param {UserApiKeyDeleteArgs} args - Arguments to delete one UserApiKey.
     * @example
     * // Delete one UserApiKey
     * const UserApiKey = await prisma.userApiKey.delete({
     *   where: {
     *     // ... filter to delete one UserApiKey
     *   }
     * })
     * 
     */
    delete<T extends UserApiKeyDeleteArgs>(args: SelectSubset<T, UserApiKeyDeleteArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserApiKey.
     * @param {UserApiKeyUpdateArgs} args - Arguments to update one UserApiKey.
     * @example
     * // Update one UserApiKey
     * const userApiKey = await prisma.userApiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserApiKeyUpdateArgs>(args: SelectSubset<T, UserApiKeyUpdateArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserApiKeys.
     * @param {UserApiKeyDeleteManyArgs} args - Arguments to filter UserApiKeys to delete.
     * @example
     * // Delete a few UserApiKeys
     * const { count } = await prisma.userApiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserApiKeyDeleteManyArgs>(args?: SelectSubset<T, UserApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserApiKeys
     * const userApiKey = await prisma.userApiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserApiKeyUpdateManyArgs>(args: SelectSubset<T, UserApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApiKeys and returns the data updated in the database.
     * @param {UserApiKeyUpdateManyAndReturnArgs} args - Arguments to update many UserApiKeys.
     * @example
     * // Update many UserApiKeys
     * const userApiKey = await prisma.userApiKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserApiKeys and only return the `id`
     * const userApiKeyWithIdOnly = await prisma.userApiKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserApiKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, UserApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserApiKey.
     * @param {UserApiKeyUpsertArgs} args - Arguments to update or create a UserApiKey.
     * @example
     * // Update or create a UserApiKey
     * const userApiKey = await prisma.userApiKey.upsert({
     *   create: {
     *     // ... data to create a UserApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserApiKey we want to update
     *   }
     * })
     */
    upsert<T extends UserApiKeyUpsertArgs>(args: SelectSubset<T, UserApiKeyUpsertArgs<ExtArgs>>): Prisma__UserApiKeyClient<$Result.GetResult<Prisma.$UserApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyCountArgs} args - Arguments to filter UserApiKeys to count.
     * @example
     * // Count the number of UserApiKeys
     * const count = await prisma.userApiKey.count({
     *   where: {
     *     // ... the filter for the UserApiKeys we want to count
     *   }
     * })
    **/
    count<T extends UserApiKeyCountArgs>(
      args?: Subset<T, UserApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserApiKeyAggregateArgs>(args: Subset<T, UserApiKeyAggregateArgs>): Prisma.PrismaPromise<GetUserApiKeyAggregateType<T>>

    /**
     * Group by UserApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: UserApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserApiKey model
   */
  readonly fields: UserApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserApiKey model
   */
  interface UserApiKeyFieldRefs {
    readonly id: FieldRef<"UserApiKey", 'String'>
    readonly userId: FieldRef<"UserApiKey", 'String'>
    readonly provider: FieldRef<"UserApiKey", 'LLMProvider'>
    readonly encryptedKey: FieldRef<"UserApiKey", 'String'>
    readonly iv: FieldRef<"UserApiKey", 'String'>
    readonly authTag: FieldRef<"UserApiKey", 'String'>
    readonly createdAt: FieldRef<"UserApiKey", 'DateTime'>
    readonly updatedAt: FieldRef<"UserApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserApiKey findUnique
   */
  export type UserApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKey to fetch.
     */
    where: UserApiKeyWhereUniqueInput
  }

  /**
   * UserApiKey findUniqueOrThrow
   */
  export type UserApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKey to fetch.
     */
    where: UserApiKeyWhereUniqueInput
  }

  /**
   * UserApiKey findFirst
   */
  export type UserApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKey to fetch.
     */
    where?: UserApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiKeys to fetch.
     */
    orderBy?: UserApiKeyOrderByWithRelationInput | UserApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApiKeys.
     */
    cursor?: UserApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApiKeys.
     */
    distinct?: UserApiKeyScalarFieldEnum | UserApiKeyScalarFieldEnum[]
  }

  /**
   * UserApiKey findFirstOrThrow
   */
  export type UserApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKey to fetch.
     */
    where?: UserApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiKeys to fetch.
     */
    orderBy?: UserApiKeyOrderByWithRelationInput | UserApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApiKeys.
     */
    cursor?: UserApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApiKeys.
     */
    distinct?: UserApiKeyScalarFieldEnum | UserApiKeyScalarFieldEnum[]
  }

  /**
   * UserApiKey findMany
   */
  export type UserApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which UserApiKeys to fetch.
     */
    where?: UserApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiKeys to fetch.
     */
    orderBy?: UserApiKeyOrderByWithRelationInput | UserApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserApiKeys.
     */
    cursor?: UserApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiKeys.
     */
    skip?: number
    distinct?: UserApiKeyScalarFieldEnum | UserApiKeyScalarFieldEnum[]
  }

  /**
   * UserApiKey create
   */
  export type UserApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a UserApiKey.
     */
    data: XOR<UserApiKeyCreateInput, UserApiKeyUncheckedCreateInput>
  }

  /**
   * UserApiKey createMany
   */
  export type UserApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserApiKeys.
     */
    data: UserApiKeyCreateManyInput | UserApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserApiKey createManyAndReturn
   */
  export type UserApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * The data used to create many UserApiKeys.
     */
    data: UserApiKeyCreateManyInput | UserApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserApiKey update
   */
  export type UserApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a UserApiKey.
     */
    data: XOR<UserApiKeyUpdateInput, UserApiKeyUncheckedUpdateInput>
    /**
     * Choose, which UserApiKey to update.
     */
    where: UserApiKeyWhereUniqueInput
  }

  /**
   * UserApiKey updateMany
   */
  export type UserApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserApiKeys.
     */
    data: XOR<UserApiKeyUpdateManyMutationInput, UserApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which UserApiKeys to update
     */
    where?: UserApiKeyWhereInput
    /**
     * Limit how many UserApiKeys to update.
     */
    limit?: number
  }

  /**
   * UserApiKey updateManyAndReturn
   */
  export type UserApiKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * The data used to update UserApiKeys.
     */
    data: XOR<UserApiKeyUpdateManyMutationInput, UserApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which UserApiKeys to update
     */
    where?: UserApiKeyWhereInput
    /**
     * Limit how many UserApiKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserApiKey upsert
   */
  export type UserApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the UserApiKey to update in case it exists.
     */
    where: UserApiKeyWhereUniqueInput
    /**
     * In case the UserApiKey found by the `where` argument doesn't exist, create a new UserApiKey with this data.
     */
    create: XOR<UserApiKeyCreateInput, UserApiKeyUncheckedCreateInput>
    /**
     * In case the UserApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserApiKeyUpdateInput, UserApiKeyUncheckedUpdateInput>
  }

  /**
   * UserApiKey delete
   */
  export type UserApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
    /**
     * Filter which UserApiKey to delete.
     */
    where: UserApiKeyWhereUniqueInput
  }

  /**
   * UserApiKey deleteMany
   */
  export type UserApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApiKeys to delete
     */
    where?: UserApiKeyWhereInput
    /**
     * Limit how many UserApiKeys to delete.
     */
    limit?: number
  }

  /**
   * UserApiKey without action
   */
  export type UserApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiKey
     */
    select?: UserApiKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiKey
     */
    omit?: UserApiKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model Prompt
   */

  export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  export type PromptMinAggregateOutputType = {
    id: string | null
    userId: string | null
    rawInput: string | null
    optimizedText: string | null
    taskType: $Enums.TaskType | null
    tone: $Enums.PromptTone | null
    format: $Enums.OutputFormat | null
    targetLlm: $Enums.LLMProvider | null
    isPublic: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    rawInput: string | null
    optimizedText: string | null
    taskType: $Enums.TaskType | null
    tone: $Enums.PromptTone | null
    format: $Enums.OutputFormat | null
    targetLlm: $Enums.LLMProvider | null
    isPublic: boolean | null
    deletedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptCountAggregateOutputType = {
    id: number
    userId: number
    rawInput: number
    optimizedText: number
    taskType: number
    tone: number
    format: number
    targetLlm: number
    tags: number
    isPublic: number
    deletedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptMinAggregateInputType = {
    id?: true
    userId?: true
    rawInput?: true
    optimizedText?: true
    taskType?: true
    tone?: true
    format?: true
    targetLlm?: true
    isPublic?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptMaxAggregateInputType = {
    id?: true
    userId?: true
    rawInput?: true
    optimizedText?: true
    taskType?: true
    tone?: true
    format?: true
    targetLlm?: true
    isPublic?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptCountAggregateInputType = {
    id?: true
    userId?: true
    rawInput?: true
    optimizedText?: true
    taskType?: true
    tone?: true
    format?: true
    targetLlm?: true
    tags?: true
    isPublic?: true
    deletedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompt to aggregate.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptMaxAggregateInputType
  }

  export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompt[P]>
      : GetScalarType<T[P], AggregatePrompt[P]>
  }




  export type PromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithAggregationInput | PromptOrderByWithAggregationInput[]
    by: PromptScalarFieldEnum[] | PromptScalarFieldEnum
    having?: PromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptCountAggregateInputType | true
    _min?: PromptMinAggregateInputType
    _max?: PromptMaxAggregateInputType
  }

  export type PromptGroupByOutputType = {
    id: string
    userId: string
    rawInput: string
    optimizedText: string
    taskType: $Enums.TaskType
    tone: $Enums.PromptTone
    format: $Enums.OutputFormat
    targetLlm: $Enums.LLMProvider
    tags: string[]
    isPublic: boolean
    deletedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PromptCountAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  type GetPromptGroupByPayload<T extends PromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptGroupByOutputType[P]>
            : GetScalarType<T[P], PromptGroupByOutputType[P]>
        }
      >
    >


  export type PromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rawInput?: boolean
    optimizedText?: boolean
    taskType?: boolean
    tone?: boolean
    format?: boolean
    targetLlm?: boolean
    tags?: boolean
    isPublic?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    evaluations?: boolean | Prompt$evaluationsArgs<ExtArgs>
    _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rawInput?: boolean
    optimizedText?: boolean
    taskType?: boolean
    tone?: boolean
    format?: boolean
    targetLlm?: boolean
    tags?: boolean
    isPublic?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    rawInput?: boolean
    optimizedText?: boolean
    taskType?: boolean
    tone?: boolean
    format?: boolean
    targetLlm?: boolean
    tags?: boolean
    isPublic?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectScalar = {
    id?: boolean
    userId?: boolean
    rawInput?: boolean
    optimizedText?: boolean
    taskType?: boolean
    tone?: boolean
    format?: boolean
    targetLlm?: boolean
    tags?: boolean
    isPublic?: boolean
    deletedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "rawInput" | "optimizedText" | "taskType" | "tone" | "format" | "targetLlm" | "tags" | "isPublic" | "deletedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["prompt"]>
  export type PromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    evaluations?: boolean | Prompt$evaluationsArgs<ExtArgs>
    _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompt"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      evaluations: Prisma.$EvaluationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      rawInput: string
      optimizedText: string
      taskType: $Enums.TaskType
      tone: $Enums.PromptTone
      format: $Enums.OutputFormat
      targetLlm: $Enums.LLMProvider
      tags: string[]
      isPublic: boolean
      deletedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prompt"]>
    composites: {}
  }

  type PromptGetPayload<S extends boolean | null | undefined | PromptDefaultArgs> = $Result.GetResult<Prisma.$PromptPayload, S>

  type PromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptCountAggregateInputType | true
    }

  export interface PromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompt'], meta: { name: 'Prompt' } }
    /**
     * Find zero or one Prompt that matches the filter.
     * @param {PromptFindUniqueArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptFindUniqueArgs>(args: SelectSubset<T, PromptFindUniqueArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptFindUniqueOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptFindFirstArgs>(args?: SelectSubset<T, PromptFindFirstArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompt.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptWithIdOnly = await prisma.prompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptFindManyArgs>(args?: SelectSubset<T, PromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prompt.
     * @param {PromptCreateArgs} args - Arguments to create a Prompt.
     * @example
     * // Create one Prompt
     * const Prompt = await prisma.prompt.create({
     *   data: {
     *     // ... data to create a Prompt
     *   }
     * })
     * 
     */
    create<T extends PromptCreateArgs>(args: SelectSubset<T, PromptCreateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prompts.
     * @param {PromptCreateManyArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptCreateManyArgs>(args?: SelectSubset<T, PromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prompts and returns the data saved in the database.
     * @param {PromptCreateManyAndReturnArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prompt.
     * @param {PromptDeleteArgs} args - Arguments to delete one Prompt.
     * @example
     * // Delete one Prompt
     * const Prompt = await prisma.prompt.delete({
     *   where: {
     *     // ... filter to delete one Prompt
     *   }
     * })
     * 
     */
    delete<T extends PromptDeleteArgs>(args: SelectSubset<T, PromptDeleteArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prompt.
     * @param {PromptUpdateArgs} args - Arguments to update one Prompt.
     * @example
     * // Update one Prompt
     * const prompt = await prisma.prompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptUpdateArgs>(args: SelectSubset<T, PromptUpdateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prompts.
     * @param {PromptDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptDeleteManyArgs>(args?: SelectSubset<T, PromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptUpdateManyArgs>(args: SelectSubset<T, PromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts and returns the data updated in the database.
     * @param {PromptUpdateManyAndReturnArgs} args - Arguments to update many Prompts.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromptUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prompt.
     * @param {PromptUpsertArgs} args - Arguments to update or create a Prompt.
     * @example
     * // Update or create a Prompt
     * const prompt = await prisma.prompt.upsert({
     *   create: {
     *     // ... data to create a Prompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompt we want to update
     *   }
     * })
     */
    upsert<T extends PromptUpsertArgs>(args: SelectSubset<T, PromptUpsertArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompt.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptCountArgs>(
      args?: Subset<T, PromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptAggregateArgs>(args: Subset<T, PromptAggregateArgs>): Prisma.PrismaPromise<GetPromptAggregateType<T>>

    /**
     * Group by Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptGroupByArgs['orderBy'] }
        : { orderBy?: PromptGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompt model
   */
  readonly fields: PromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    evaluations<T extends Prompt$evaluationsArgs<ExtArgs> = {}>(args?: Subset<T, Prompt$evaluationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prompt model
   */
  interface PromptFieldRefs {
    readonly id: FieldRef<"Prompt", 'String'>
    readonly userId: FieldRef<"Prompt", 'String'>
    readonly rawInput: FieldRef<"Prompt", 'String'>
    readonly optimizedText: FieldRef<"Prompt", 'String'>
    readonly taskType: FieldRef<"Prompt", 'TaskType'>
    readonly tone: FieldRef<"Prompt", 'PromptTone'>
    readonly format: FieldRef<"Prompt", 'OutputFormat'>
    readonly targetLlm: FieldRef<"Prompt", 'LLMProvider'>
    readonly tags: FieldRef<"Prompt", 'String[]'>
    readonly isPublic: FieldRef<"Prompt", 'Boolean'>
    readonly deletedAt: FieldRef<"Prompt", 'DateTime'>
    readonly createdAt: FieldRef<"Prompt", 'DateTime'>
    readonly updatedAt: FieldRef<"Prompt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prompt findUnique
   */
  export type PromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findUniqueOrThrow
   */
  export type PromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findFirst
   */
  export type PromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findFirstOrThrow
   */
  export type PromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findMany
   */
  export type PromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt create
   */
  export type PromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompt.
     */
    data: XOR<PromptCreateInput, PromptUncheckedCreateInput>
  }

  /**
   * Prompt createMany
   */
  export type PromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt createManyAndReturn
   */
  export type PromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompt update
   */
  export type PromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompt.
     */
    data: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
    /**
     * Choose, which Prompt to update.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt updateMany
   */
  export type PromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt updateManyAndReturn
   */
  export type PromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompt upsert
   */
  export type PromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompt to update in case it exists.
     */
    where: PromptWhereUniqueInput
    /**
     * In case the Prompt found by the `where` argument doesn't exist, create a new Prompt with this data.
     */
    create: XOR<PromptCreateInput, PromptUncheckedCreateInput>
    /**
     * In case the Prompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
  }

  /**
   * Prompt delete
   */
  export type PromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter which Prompt to delete.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt deleteMany
   */
  export type PromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to delete.
     */
    limit?: number
  }

  /**
   * Prompt.evaluations
   */
  export type Prompt$evaluationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    cursor?: EvaluationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Prompt without action
   */
  export type PromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
  }


  /**
   * Model Evaluation
   */

  export type AggregateEvaluation = {
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  export type EvaluationAvgAggregateOutputType = {
    structureScore: number | null
    clarityScore: number | null
    completenessScore: number | null
    specificityScore: number | null
    overallScore: number | null
  }

  export type EvaluationSumAggregateOutputType = {
    structureScore: number | null
    clarityScore: number | null
    completenessScore: number | null
    specificityScore: number | null
    overallScore: number | null
  }

  export type EvaluationMinAggregateOutputType = {
    id: string | null
    promptId: string | null
    userId: string | null
    promptText: string | null
    structureScore: number | null
    clarityScore: number | null
    completenessScore: number | null
    specificityScore: number | null
    overallScore: number | null
    provider: $Enums.LLMProvider | null
    model: string | null
    createdAt: Date | null
  }

  export type EvaluationMaxAggregateOutputType = {
    id: string | null
    promptId: string | null
    userId: string | null
    promptText: string | null
    structureScore: number | null
    clarityScore: number | null
    completenessScore: number | null
    specificityScore: number | null
    overallScore: number | null
    provider: $Enums.LLMProvider | null
    model: string | null
    createdAt: Date | null
  }

  export type EvaluationCountAggregateOutputType = {
    id: number
    promptId: number
    userId: number
    promptText: number
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: number
    suggestions: number
    provider: number
    model: number
    createdAt: number
    _all: number
  }


  export type EvaluationAvgAggregateInputType = {
    structureScore?: true
    clarityScore?: true
    completenessScore?: true
    specificityScore?: true
    overallScore?: true
  }

  export type EvaluationSumAggregateInputType = {
    structureScore?: true
    clarityScore?: true
    completenessScore?: true
    specificityScore?: true
    overallScore?: true
  }

  export type EvaluationMinAggregateInputType = {
    id?: true
    promptId?: true
    userId?: true
    promptText?: true
    structureScore?: true
    clarityScore?: true
    completenessScore?: true
    specificityScore?: true
    overallScore?: true
    provider?: true
    model?: true
    createdAt?: true
  }

  export type EvaluationMaxAggregateInputType = {
    id?: true
    promptId?: true
    userId?: true
    promptText?: true
    structureScore?: true
    clarityScore?: true
    completenessScore?: true
    specificityScore?: true
    overallScore?: true
    provider?: true
    model?: true
    createdAt?: true
  }

  export type EvaluationCountAggregateInputType = {
    id?: true
    promptId?: true
    userId?: true
    promptText?: true
    structureScore?: true
    clarityScore?: true
    completenessScore?: true
    specificityScore?: true
    overallScore?: true
    feedback?: true
    suggestions?: true
    provider?: true
    model?: true
    createdAt?: true
    _all?: true
  }

  export type EvaluationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluation to aggregate.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Evaluations
    **/
    _count?: true | EvaluationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EvaluationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EvaluationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EvaluationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EvaluationMaxAggregateInputType
  }

  export type GetEvaluationAggregateType<T extends EvaluationAggregateArgs> = {
        [P in keyof T & keyof AggregateEvaluation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvaluation[P]>
      : GetScalarType<T[P], AggregateEvaluation[P]>
  }




  export type EvaluationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EvaluationWhereInput
    orderBy?: EvaluationOrderByWithAggregationInput | EvaluationOrderByWithAggregationInput[]
    by: EvaluationScalarFieldEnum[] | EvaluationScalarFieldEnum
    having?: EvaluationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EvaluationCountAggregateInputType | true
    _avg?: EvaluationAvgAggregateInputType
    _sum?: EvaluationSumAggregateInputType
    _min?: EvaluationMinAggregateInputType
    _max?: EvaluationMaxAggregateInputType
  }

  export type EvaluationGroupByOutputType = {
    id: string
    promptId: string | null
    userId: string
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonValue
    suggestions: string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt: Date
    _count: EvaluationCountAggregateOutputType | null
    _avg: EvaluationAvgAggregateOutputType | null
    _sum: EvaluationSumAggregateOutputType | null
    _min: EvaluationMinAggregateOutputType | null
    _max: EvaluationMaxAggregateOutputType | null
  }

  type GetEvaluationGroupByPayload<T extends EvaluationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EvaluationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EvaluationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
            : GetScalarType<T[P], EvaluationGroupByOutputType[P]>
        }
      >
    >


  export type EvaluationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promptId?: boolean
    userId?: boolean
    promptText?: boolean
    structureScore?: boolean
    clarityScore?: boolean
    completenessScore?: boolean
    specificityScore?: boolean
    overallScore?: boolean
    feedback?: boolean
    suggestions?: boolean
    provider?: boolean
    model?: boolean
    createdAt?: boolean
    prompt?: boolean | Evaluation$promptArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promptId?: boolean
    userId?: boolean
    promptText?: boolean
    structureScore?: boolean
    clarityScore?: boolean
    completenessScore?: boolean
    specificityScore?: boolean
    overallScore?: boolean
    feedback?: boolean
    suggestions?: boolean
    provider?: boolean
    model?: boolean
    createdAt?: boolean
    prompt?: boolean | Evaluation$promptArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    promptId?: boolean
    userId?: boolean
    promptText?: boolean
    structureScore?: boolean
    clarityScore?: boolean
    completenessScore?: boolean
    specificityScore?: boolean
    overallScore?: boolean
    feedback?: boolean
    suggestions?: boolean
    provider?: boolean
    model?: boolean
    createdAt?: boolean
    prompt?: boolean | Evaluation$promptArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evaluation"]>

  export type EvaluationSelectScalar = {
    id?: boolean
    promptId?: boolean
    userId?: boolean
    promptText?: boolean
    structureScore?: boolean
    clarityScore?: boolean
    completenessScore?: boolean
    specificityScore?: boolean
    overallScore?: boolean
    feedback?: boolean
    suggestions?: boolean
    provider?: boolean
    model?: boolean
    createdAt?: boolean
  }

  export type EvaluationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "promptId" | "userId" | "promptText" | "structureScore" | "clarityScore" | "completenessScore" | "specificityScore" | "overallScore" | "feedback" | "suggestions" | "provider" | "model" | "createdAt", ExtArgs["result"]["evaluation"]>
  export type EvaluationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | Evaluation$promptArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | Evaluation$promptArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EvaluationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | Evaluation$promptArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EvaluationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evaluation"
    objects: {
      prompt: Prisma.$PromptPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      promptId: string | null
      userId: string
      promptText: string
      structureScore: number
      clarityScore: number
      completenessScore: number
      specificityScore: number
      overallScore: number
      feedback: Prisma.JsonValue
      suggestions: string[]
      provider: $Enums.LLMProvider
      model: string
      createdAt: Date
    }, ExtArgs["result"]["evaluation"]>
    composites: {}
  }

  type EvaluationGetPayload<S extends boolean | null | undefined | EvaluationDefaultArgs> = $Result.GetResult<Prisma.$EvaluationPayload, S>

  type EvaluationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EvaluationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EvaluationCountAggregateInputType | true
    }

  export interface EvaluationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evaluation'], meta: { name: 'Evaluation' } }
    /**
     * Find zero or one Evaluation that matches the filter.
     * @param {EvaluationFindUniqueArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EvaluationFindUniqueArgs>(args: SelectSubset<T, EvaluationFindUniqueArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evaluation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EvaluationFindUniqueOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EvaluationFindUniqueOrThrowArgs>(args: SelectSubset<T, EvaluationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EvaluationFindFirstArgs>(args?: SelectSubset<T, EvaluationFindFirstArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evaluation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindFirstOrThrowArgs} args - Arguments to find a Evaluation
     * @example
     * // Get one Evaluation
     * const evaluation = await prisma.evaluation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EvaluationFindFirstOrThrowArgs>(args?: SelectSubset<T, EvaluationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Evaluations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Evaluations
     * const evaluations = await prisma.evaluation.findMany()
     * 
     * // Get first 10 Evaluations
     * const evaluations = await prisma.evaluation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EvaluationFindManyArgs>(args?: SelectSubset<T, EvaluationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evaluation.
     * @param {EvaluationCreateArgs} args - Arguments to create a Evaluation.
     * @example
     * // Create one Evaluation
     * const Evaluation = await prisma.evaluation.create({
     *   data: {
     *     // ... data to create a Evaluation
     *   }
     * })
     * 
     */
    create<T extends EvaluationCreateArgs>(args: SelectSubset<T, EvaluationCreateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Evaluations.
     * @param {EvaluationCreateManyArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EvaluationCreateManyArgs>(args?: SelectSubset<T, EvaluationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Evaluations and returns the data saved in the database.
     * @param {EvaluationCreateManyAndReturnArgs} args - Arguments to create many Evaluations.
     * @example
     * // Create many Evaluations
     * const evaluation = await prisma.evaluation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EvaluationCreateManyAndReturnArgs>(args?: SelectSubset<T, EvaluationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evaluation.
     * @param {EvaluationDeleteArgs} args - Arguments to delete one Evaluation.
     * @example
     * // Delete one Evaluation
     * const Evaluation = await prisma.evaluation.delete({
     *   where: {
     *     // ... filter to delete one Evaluation
     *   }
     * })
     * 
     */
    delete<T extends EvaluationDeleteArgs>(args: SelectSubset<T, EvaluationDeleteArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evaluation.
     * @param {EvaluationUpdateArgs} args - Arguments to update one Evaluation.
     * @example
     * // Update one Evaluation
     * const evaluation = await prisma.evaluation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EvaluationUpdateArgs>(args: SelectSubset<T, EvaluationUpdateArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Evaluations.
     * @param {EvaluationDeleteManyArgs} args - Arguments to filter Evaluations to delete.
     * @example
     * // Delete a few Evaluations
     * const { count } = await prisma.evaluation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EvaluationDeleteManyArgs>(args?: SelectSubset<T, EvaluationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EvaluationUpdateManyArgs>(args: SelectSubset<T, EvaluationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Evaluations and returns the data updated in the database.
     * @param {EvaluationUpdateManyAndReturnArgs} args - Arguments to update many Evaluations.
     * @example
     * // Update many Evaluations
     * const evaluation = await prisma.evaluation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Evaluations and only return the `id`
     * const evaluationWithIdOnly = await prisma.evaluation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EvaluationUpdateManyAndReturnArgs>(args: SelectSubset<T, EvaluationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evaluation.
     * @param {EvaluationUpsertArgs} args - Arguments to update or create a Evaluation.
     * @example
     * // Update or create a Evaluation
     * const evaluation = await prisma.evaluation.upsert({
     *   create: {
     *     // ... data to create a Evaluation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evaluation we want to update
     *   }
     * })
     */
    upsert<T extends EvaluationUpsertArgs>(args: SelectSubset<T, EvaluationUpsertArgs<ExtArgs>>): Prisma__EvaluationClient<$Result.GetResult<Prisma.$EvaluationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Evaluations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationCountArgs} args - Arguments to filter Evaluations to count.
     * @example
     * // Count the number of Evaluations
     * const count = await prisma.evaluation.count({
     *   where: {
     *     // ... the filter for the Evaluations we want to count
     *   }
     * })
    **/
    count<T extends EvaluationCountArgs>(
      args?: Subset<T, EvaluationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EvaluationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EvaluationAggregateArgs>(args: Subset<T, EvaluationAggregateArgs>): Prisma.PrismaPromise<GetEvaluationAggregateType<T>>

    /**
     * Group by Evaluation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EvaluationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EvaluationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EvaluationGroupByArgs['orderBy'] }
        : { orderBy?: EvaluationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EvaluationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvaluationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evaluation model
   */
  readonly fields: EvaluationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evaluation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EvaluationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompt<T extends Evaluation$promptArgs<ExtArgs> = {}>(args?: Subset<T, Evaluation$promptArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Evaluation model
   */
  interface EvaluationFieldRefs {
    readonly id: FieldRef<"Evaluation", 'String'>
    readonly promptId: FieldRef<"Evaluation", 'String'>
    readonly userId: FieldRef<"Evaluation", 'String'>
    readonly promptText: FieldRef<"Evaluation", 'String'>
    readonly structureScore: FieldRef<"Evaluation", 'Float'>
    readonly clarityScore: FieldRef<"Evaluation", 'Float'>
    readonly completenessScore: FieldRef<"Evaluation", 'Float'>
    readonly specificityScore: FieldRef<"Evaluation", 'Float'>
    readonly overallScore: FieldRef<"Evaluation", 'Float'>
    readonly feedback: FieldRef<"Evaluation", 'Json'>
    readonly suggestions: FieldRef<"Evaluation", 'String[]'>
    readonly provider: FieldRef<"Evaluation", 'LLMProvider'>
    readonly model: FieldRef<"Evaluation", 'String'>
    readonly createdAt: FieldRef<"Evaluation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Evaluation findUnique
   */
  export type EvaluationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findUniqueOrThrow
   */
  export type EvaluationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation findFirst
   */
  export type EvaluationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findFirstOrThrow
   */
  export type EvaluationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluation to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Evaluations.
     */
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation findMany
   */
  export type EvaluationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter, which Evaluations to fetch.
     */
    where?: EvaluationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Evaluations to fetch.
     */
    orderBy?: EvaluationOrderByWithRelationInput | EvaluationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Evaluations.
     */
    cursor?: EvaluationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Evaluations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Evaluations.
     */
    skip?: number
    distinct?: EvaluationScalarFieldEnum | EvaluationScalarFieldEnum[]
  }

  /**
   * Evaluation create
   */
  export type EvaluationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to create a Evaluation.
     */
    data: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
  }

  /**
   * Evaluation createMany
   */
  export type EvaluationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evaluation createManyAndReturn
   */
  export type EvaluationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to create many Evaluations.
     */
    data: EvaluationCreateManyInput | EvaluationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation update
   */
  export type EvaluationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The data needed to update a Evaluation.
     */
    data: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
    /**
     * Choose, which Evaluation to update.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation updateMany
   */
  export type EvaluationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
  }

  /**
   * Evaluation updateManyAndReturn
   */
  export type EvaluationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * The data used to update Evaluations.
     */
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyInput>
    /**
     * Filter which Evaluations to update
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evaluation upsert
   */
  export type EvaluationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * The filter to search for the Evaluation to update in case it exists.
     */
    where: EvaluationWhereUniqueInput
    /**
     * In case the Evaluation found by the `where` argument doesn't exist, create a new Evaluation with this data.
     */
    create: XOR<EvaluationCreateInput, EvaluationUncheckedCreateInput>
    /**
     * In case the Evaluation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EvaluationUpdateInput, EvaluationUncheckedUpdateInput>
  }

  /**
   * Evaluation delete
   */
  export type EvaluationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
    /**
     * Filter which Evaluation to delete.
     */
    where: EvaluationWhereUniqueInput
  }

  /**
   * Evaluation deleteMany
   */
  export type EvaluationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evaluations to delete
     */
    where?: EvaluationWhereInput
    /**
     * Limit how many Evaluations to delete.
     */
    limit?: number
  }

  /**
   * Evaluation.prompt
   */
  export type Evaluation$promptArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    where?: PromptWhereInput
  }

  /**
   * Evaluation without action
   */
  export type EvaluationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evaluation
     */
    select?: EvaluationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evaluation
     */
    omit?: EvaluationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EvaluationInclude<ExtArgs> | null
  }


  /**
   * Model PromptTemplate
   */

  export type AggregatePromptTemplate = {
    _count: PromptTemplateCountAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  export type PromptTemplateMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    category: $Enums.TemplateCategory | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTemplateMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    description: string | null
    category: $Enums.TemplateCategory | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PromptTemplateCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    description: number
    category: number
    template: number
    variables: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PromptTemplateMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    category?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTemplateMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    category?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PromptTemplateCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    description?: true
    category?: true
    template?: true
    variables?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PromptTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplate to aggregate.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptTemplates
    **/
    _count?: true | PromptTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type GetPromptTemplateAggregateType<T extends PromptTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptTemplate[P]>
      : GetScalarType<T[P], AggregatePromptTemplate[P]>
  }




  export type PromptTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptTemplateWhereInput
    orderBy?: PromptTemplateOrderByWithAggregationInput | PromptTemplateOrderByWithAggregationInput[]
    by: PromptTemplateScalarFieldEnum[] | PromptTemplateScalarFieldEnum
    having?: PromptTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptTemplateCountAggregateInputType | true
    _min?: PromptTemplateMinAggregateInputType
    _max?: PromptTemplateMaxAggregateInputType
  }

  export type PromptTemplateGroupByOutputType = {
    id: string
    slug: string
    name: string
    description: string
    category: $Enums.TemplateCategory
    template: JsonValue
    variables: JsonValue
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PromptTemplateCountAggregateOutputType | null
    _min: PromptTemplateMinAggregateOutputType | null
    _max: PromptTemplateMaxAggregateOutputType | null
  }

  type GetPromptTemplateGroupByPayload<T extends PromptTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], PromptTemplateGroupByOutputType[P]>
        }
      >
    >


  export type PromptTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    template?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    template?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    template?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["promptTemplate"]>

  export type PromptTemplateSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    template?: boolean
    variables?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PromptTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "description" | "category" | "template" | "variables" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["promptTemplate"]>

  export type $PromptTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptTemplate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      description: string
      category: $Enums.TemplateCategory
      template: Prisma.JsonValue
      variables: Prisma.JsonValue
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["promptTemplate"]>
    composites: {}
  }

  type PromptTemplateGetPayload<S extends boolean | null | undefined | PromptTemplateDefaultArgs> = $Result.GetResult<Prisma.$PromptTemplatePayload, S>

  type PromptTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptTemplateCountAggregateInputType | true
    }

  export interface PromptTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptTemplate'], meta: { name: 'PromptTemplate' } }
    /**
     * Find zero or one PromptTemplate that matches the filter.
     * @param {PromptTemplateFindUniqueArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptTemplateFindUniqueArgs>(args: SelectSubset<T, PromptTemplateFindUniqueArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromptTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptTemplateFindUniqueOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptTemplateFindFirstArgs>(args?: SelectSubset<T, PromptTemplateFindFirstArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindFirstOrThrowArgs} args - Arguments to find a PromptTemplate
     * @example
     * // Get one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromptTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany()
     * 
     * // Get first 10 PromptTemplates
     * const promptTemplates = await prisma.promptTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptTemplateFindManyArgs>(args?: SelectSubset<T, PromptTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromptTemplate.
     * @param {PromptTemplateCreateArgs} args - Arguments to create a PromptTemplate.
     * @example
     * // Create one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.create({
     *   data: {
     *     // ... data to create a PromptTemplate
     *   }
     * })
     * 
     */
    create<T extends PromptTemplateCreateArgs>(args: SelectSubset<T, PromptTemplateCreateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromptTemplates.
     * @param {PromptTemplateCreateManyArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptTemplateCreateManyArgs>(args?: SelectSubset<T, PromptTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptTemplates and returns the data saved in the database.
     * @param {PromptTemplateCreateManyAndReturnArgs} args - Arguments to create many PromptTemplates.
     * @example
     * // Create many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptTemplates and only return the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromptTemplate.
     * @param {PromptTemplateDeleteArgs} args - Arguments to delete one PromptTemplate.
     * @example
     * // Delete one PromptTemplate
     * const PromptTemplate = await prisma.promptTemplate.delete({
     *   where: {
     *     // ... filter to delete one PromptTemplate
     *   }
     * })
     * 
     */
    delete<T extends PromptTemplateDeleteArgs>(args: SelectSubset<T, PromptTemplateDeleteArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromptTemplate.
     * @param {PromptTemplateUpdateArgs} args - Arguments to update one PromptTemplate.
     * @example
     * // Update one PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptTemplateUpdateArgs>(args: SelectSubset<T, PromptTemplateUpdateArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromptTemplates.
     * @param {PromptTemplateDeleteManyArgs} args - Arguments to filter PromptTemplates to delete.
     * @example
     * // Delete a few PromptTemplates
     * const { count } = await prisma.promptTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptTemplateDeleteManyArgs>(args?: SelectSubset<T, PromptTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptTemplateUpdateManyArgs>(args: SelectSubset<T, PromptTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptTemplates and returns the data updated in the database.
     * @param {PromptTemplateUpdateManyAndReturnArgs} args - Arguments to update many PromptTemplates.
     * @example
     * // Update many PromptTemplates
     * const promptTemplate = await prisma.promptTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromptTemplates and only return the `id`
     * const promptTemplateWithIdOnly = await prisma.promptTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromptTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromptTemplate.
     * @param {PromptTemplateUpsertArgs} args - Arguments to update or create a PromptTemplate.
     * @example
     * // Update or create a PromptTemplate
     * const promptTemplate = await prisma.promptTemplate.upsert({
     *   create: {
     *     // ... data to create a PromptTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptTemplate we want to update
     *   }
     * })
     */
    upsert<T extends PromptTemplateUpsertArgs>(args: SelectSubset<T, PromptTemplateUpsertArgs<ExtArgs>>): Prisma__PromptTemplateClient<$Result.GetResult<Prisma.$PromptTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromptTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateCountArgs} args - Arguments to filter PromptTemplates to count.
     * @example
     * // Count the number of PromptTemplates
     * const count = await prisma.promptTemplate.count({
     *   where: {
     *     // ... the filter for the PromptTemplates we want to count
     *   }
     * })
    **/
    count<T extends PromptTemplateCountArgs>(
      args?: Subset<T, PromptTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptTemplateAggregateArgs>(args: Subset<T, PromptTemplateAggregateArgs>): Prisma.PrismaPromise<GetPromptTemplateAggregateType<T>>

    /**
     * Group by PromptTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptTemplateGroupByArgs['orderBy'] }
        : { orderBy?: PromptTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptTemplate model
   */
  readonly fields: PromptTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PromptTemplate model
   */
  interface PromptTemplateFieldRefs {
    readonly id: FieldRef<"PromptTemplate", 'String'>
    readonly slug: FieldRef<"PromptTemplate", 'String'>
    readonly name: FieldRef<"PromptTemplate", 'String'>
    readonly description: FieldRef<"PromptTemplate", 'String'>
    readonly category: FieldRef<"PromptTemplate", 'TemplateCategory'>
    readonly template: FieldRef<"PromptTemplate", 'Json'>
    readonly variables: FieldRef<"PromptTemplate", 'Json'>
    readonly isActive: FieldRef<"PromptTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"PromptTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"PromptTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptTemplate findUnique
   */
  export type PromptTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findUniqueOrThrow
   */
  export type PromptTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate findFirst
   */
  export type PromptTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findFirstOrThrow
   */
  export type PromptTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplate to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptTemplates.
     */
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate findMany
   */
  export type PromptTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter, which PromptTemplates to fetch.
     */
    where?: PromptTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptTemplates to fetch.
     */
    orderBy?: PromptTemplateOrderByWithRelationInput | PromptTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptTemplates.
     */
    cursor?: PromptTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptTemplates.
     */
    skip?: number
    distinct?: PromptTemplateScalarFieldEnum | PromptTemplateScalarFieldEnum[]
  }

  /**
   * PromptTemplate create
   */
  export type PromptTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data needed to create a PromptTemplate.
     */
    data: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
  }

  /**
   * PromptTemplate createMany
   */
  export type PromptTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptTemplate createManyAndReturn
   */
  export type PromptTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many PromptTemplates.
     */
    data: PromptTemplateCreateManyInput | PromptTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptTemplate update
   */
  export type PromptTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data needed to update a PromptTemplate.
     */
    data: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
    /**
     * Choose, which PromptTemplate to update.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate updateMany
   */
  export type PromptTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptTemplates.
     */
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PromptTemplates to update
     */
    where?: PromptTemplateWhereInput
    /**
     * Limit how many PromptTemplates to update.
     */
    limit?: number
  }

  /**
   * PromptTemplate updateManyAndReturn
   */
  export type PromptTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The data used to update PromptTemplates.
     */
    data: XOR<PromptTemplateUpdateManyMutationInput, PromptTemplateUncheckedUpdateManyInput>
    /**
     * Filter which PromptTemplates to update
     */
    where?: PromptTemplateWhereInput
    /**
     * Limit how many PromptTemplates to update.
     */
    limit?: number
  }

  /**
   * PromptTemplate upsert
   */
  export type PromptTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * The filter to search for the PromptTemplate to update in case it exists.
     */
    where: PromptTemplateWhereUniqueInput
    /**
     * In case the PromptTemplate found by the `where` argument doesn't exist, create a new PromptTemplate with this data.
     */
    create: XOR<PromptTemplateCreateInput, PromptTemplateUncheckedCreateInput>
    /**
     * In case the PromptTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptTemplateUpdateInput, PromptTemplateUncheckedUpdateInput>
  }

  /**
   * PromptTemplate delete
   */
  export type PromptTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
    /**
     * Filter which PromptTemplate to delete.
     */
    where: PromptTemplateWhereUniqueInput
  }

  /**
   * PromptTemplate deleteMany
   */
  export type PromptTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptTemplates to delete
     */
    where?: PromptTemplateWhereInput
    /**
     * Limit how many PromptTemplates to delete.
     */
    limit?: number
  }

  /**
   * PromptTemplate without action
   */
  export type PromptTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptTemplate
     */
    select?: PromptTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptTemplate
     */
    omit?: PromptTemplateOmit<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tier: $Enums.SubscriptionTier | null
    status: $Enums.SubscriptionStatus | null
    billingInterval: $Enums.BillingInterval | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    trialEndsAt: Date | null
    canceledAt: Date | null
    gatewayCustomerId: string | null
    gatewaySubscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tier: $Enums.SubscriptionTier | null
    status: $Enums.SubscriptionStatus | null
    billingInterval: $Enums.BillingInterval | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    trialEndsAt: Date | null
    canceledAt: Date | null
    gatewayCustomerId: string | null
    gatewaySubscriptionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    tier: number
    status: number
    billingInterval: number
    currentPeriodStart: number
    currentPeriodEnd: number
    trialEndsAt: number
    canceledAt: number
    gatewayCustomerId: number
    gatewaySubscriptionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    tier?: true
    status?: true
    billingInterval?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    trialEndsAt?: true
    canceledAt?: true
    gatewayCustomerId?: true
    gatewaySubscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    tier?: true
    status?: true
    billingInterval?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    trialEndsAt?: true
    canceledAt?: true
    gatewayCustomerId?: true
    gatewaySubscriptionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    tier?: true
    status?: true
    billingInterval?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    trialEndsAt?: true
    canceledAt?: true
    gatewayCustomerId?: true
    gatewaySubscriptionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    tier: $Enums.SubscriptionTier
    status: $Enums.SubscriptionStatus
    billingInterval: $Enums.BillingInterval | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    trialEndsAt: Date | null
    canceledAt: Date | null
    gatewayCustomerId: string | null
    gatewaySubscriptionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tier?: boolean
    status?: boolean
    billingInterval?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    trialEndsAt?: boolean
    canceledAt?: boolean
    gatewayCustomerId?: boolean
    gatewaySubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tier?: boolean
    status?: boolean
    billingInterval?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    trialEndsAt?: boolean
    canceledAt?: boolean
    gatewayCustomerId?: boolean
    gatewaySubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tier?: boolean
    status?: boolean
    billingInterval?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    trialEndsAt?: boolean
    canceledAt?: boolean
    gatewayCustomerId?: boolean
    gatewaySubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    tier?: boolean
    status?: boolean
    billingInterval?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    trialEndsAt?: boolean
    canceledAt?: boolean
    gatewayCustomerId?: boolean
    gatewaySubscriptionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tier" | "status" | "billingInterval" | "currentPeriodStart" | "currentPeriodEnd" | "trialEndsAt" | "canceledAt" | "gatewayCustomerId" | "gatewaySubscriptionId" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tier: $Enums.SubscriptionTier
      status: $Enums.SubscriptionStatus
      billingInterval: $Enums.BillingInterval | null
      currentPeriodStart: Date | null
      currentPeriodEnd: Date | null
      trialEndsAt: Date | null
      canceledAt: Date | null
      gatewayCustomerId: string | null
      gatewaySubscriptionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Subscription$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly tier: FieldRef<"Subscription", 'SubscriptionTier'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly billingInterval: FieldRef<"Subscription", 'BillingInterval'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly trialEndsAt: FieldRef<"Subscription", 'DateTime'>
    readonly canceledAt: FieldRef<"Subscription", 'DateTime'>
    readonly gatewayCustomerId: FieldRef<"Subscription", 'String'>
    readonly gatewaySubscriptionId: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.payments
   */
  export type Subscription$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    gatewayPaymentId: string | null
    invoiceNumber: string | null
    paidAt: Date | null
    failedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    subscriptionId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    method: $Enums.PaymentMethod | null
    gatewayPaymentId: string | null
    invoiceNumber: string | null
    paidAt: Date | null
    failedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    subscriptionId: number
    amount: number
    currency: number
    status: number
    method: number
    gatewayPaymentId: number
    gatewayResponse: number
    invoiceNumber: number
    paidAt: number
    failedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    gatewayPaymentId?: true
    invoiceNumber?: true
    paidAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    gatewayPaymentId?: true
    invoiceNumber?: true
    paidAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    gatewayPaymentId?: true
    gatewayResponse?: true
    invoiceNumber?: true
    paidAt?: true
    failedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    subscriptionId: string
    amount: number
    currency: string
    status: $Enums.PaymentStatus
    method: $Enums.PaymentMethod | null
    gatewayPaymentId: string | null
    gatewayResponse: JsonValue | null
    invoiceNumber: string | null
    paidAt: Date | null
    failedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    gatewayPaymentId?: boolean
    gatewayResponse?: boolean
    invoiceNumber?: boolean
    paidAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    gatewayPaymentId?: boolean
    gatewayResponse?: boolean
    invoiceNumber?: boolean
    paidAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    gatewayPaymentId?: boolean
    gatewayResponse?: boolean
    invoiceNumber?: boolean
    paidAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    gatewayPaymentId?: boolean
    gatewayResponse?: boolean
    invoiceNumber?: boolean
    paidAt?: boolean
    failedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "amount" | "currency" | "status" | "method" | "gatewayPaymentId" | "gatewayResponse" | "invoiceNumber" | "paidAt" | "failedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | SubscriptionDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      subscriptionId: string
      amount: number
      currency: string
      status: $Enums.PaymentStatus
      method: $Enums.PaymentMethod | null
      gatewayPaymentId: string | null
      gatewayResponse: Prisma.JsonValue | null
      invoiceNumber: string | null
      paidAt: Date | null
      failedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends SubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionDefaultArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly subscriptionId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly gatewayPaymentId: FieldRef<"Payment", 'String'>
    readonly gatewayResponse: FieldRef<"Payment", 'Json'>
    readonly invoiceNumber: FieldRef<"Payment", 'String'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly failedAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model UsageRecord
   */

  export type AggregateUsageRecord = {
    _count: UsageRecordCountAggregateOutputType | null
    _avg: UsageRecordAvgAggregateOutputType | null
    _sum: UsageRecordSumAggregateOutputType | null
    _min: UsageRecordMinAggregateOutputType | null
    _max: UsageRecordMaxAggregateOutputType | null
  }

  export type UsageRecordAvgAggregateOutputType = {
    count: number | null
  }

  export type UsageRecordSumAggregateOutputType = {
    count: number | null
  }

  export type UsageRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.UsageType | null
    count: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type UsageRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.UsageType | null
    count: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type UsageRecordCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    count: number
    date: number
    createdAt: number
    _all: number
  }


  export type UsageRecordAvgAggregateInputType = {
    count?: true
  }

  export type UsageRecordSumAggregateInputType = {
    count?: true
  }

  export type UsageRecordMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    count?: true
    date?: true
    createdAt?: true
  }

  export type UsageRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    count?: true
    date?: true
    createdAt?: true
  }

  export type UsageRecordCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    count?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type UsageRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageRecord to aggregate.
     */
    where?: UsageRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageRecords to fetch.
     */
    orderBy?: UsageRecordOrderByWithRelationInput | UsageRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageRecords
    **/
    _count?: true | UsageRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageRecordMaxAggregateInputType
  }

  export type GetUsageRecordAggregateType<T extends UsageRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageRecord[P]>
      : GetScalarType<T[P], AggregateUsageRecord[P]>
  }




  export type UsageRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageRecordWhereInput
    orderBy?: UsageRecordOrderByWithAggregationInput | UsageRecordOrderByWithAggregationInput[]
    by: UsageRecordScalarFieldEnum[] | UsageRecordScalarFieldEnum
    having?: UsageRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageRecordCountAggregateInputType | true
    _avg?: UsageRecordAvgAggregateInputType
    _sum?: UsageRecordSumAggregateInputType
    _min?: UsageRecordMinAggregateInputType
    _max?: UsageRecordMaxAggregateInputType
  }

  export type UsageRecordGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.UsageType
    count: number
    date: Date
    createdAt: Date
    _count: UsageRecordCountAggregateOutputType | null
    _avg: UsageRecordAvgAggregateOutputType | null
    _sum: UsageRecordSumAggregateOutputType | null
    _min: UsageRecordMinAggregateOutputType | null
    _max: UsageRecordMaxAggregateOutputType | null
  }

  type GetUsageRecordGroupByPayload<T extends UsageRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageRecordGroupByOutputType[P]>
            : GetScalarType<T[P], UsageRecordGroupByOutputType[P]>
        }
      >
    >


  export type UsageRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    count?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageRecord"]>

  export type UsageRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    count?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageRecord"]>

  export type UsageRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    count?: boolean
    date?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageRecord"]>

  export type UsageRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    count?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type UsageRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "count" | "date" | "createdAt", ExtArgs["result"]["usageRecord"]>
  export type UsageRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UsageRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UsageRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UsageRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.UsageType
      count: number
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["usageRecord"]>
    composites: {}
  }

  type UsageRecordGetPayload<S extends boolean | null | undefined | UsageRecordDefaultArgs> = $Result.GetResult<Prisma.$UsageRecordPayload, S>

  type UsageRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsageRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsageRecordCountAggregateInputType | true
    }

  export interface UsageRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageRecord'], meta: { name: 'UsageRecord' } }
    /**
     * Find zero or one UsageRecord that matches the filter.
     * @param {UsageRecordFindUniqueArgs} args - Arguments to find a UsageRecord
     * @example
     * // Get one UsageRecord
     * const usageRecord = await prisma.usageRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageRecordFindUniqueArgs>(args: SelectSubset<T, UsageRecordFindUniqueArgs<ExtArgs>>): Prisma__UsageRecordClient<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsageRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsageRecordFindUniqueOrThrowArgs} args - Arguments to find a UsageRecord
     * @example
     * // Get one UsageRecord
     * const usageRecord = await prisma.usageRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageRecordClient<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageRecordFindFirstArgs} args - Arguments to find a UsageRecord
     * @example
     * // Get one UsageRecord
     * const usageRecord = await prisma.usageRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageRecordFindFirstArgs>(args?: SelectSubset<T, UsageRecordFindFirstArgs<ExtArgs>>): Prisma__UsageRecordClient<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsageRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageRecordFindFirstOrThrowArgs} args - Arguments to find a UsageRecord
     * @example
     * // Get one UsageRecord
     * const usageRecord = await prisma.usageRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageRecordClient<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsageRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageRecords
     * const usageRecords = await prisma.usageRecord.findMany()
     * 
     * // Get first 10 UsageRecords
     * const usageRecords = await prisma.usageRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageRecordWithIdOnly = await prisma.usageRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageRecordFindManyArgs>(args?: SelectSubset<T, UsageRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsageRecord.
     * @param {UsageRecordCreateArgs} args - Arguments to create a UsageRecord.
     * @example
     * // Create one UsageRecord
     * const UsageRecord = await prisma.usageRecord.create({
     *   data: {
     *     // ... data to create a UsageRecord
     *   }
     * })
     * 
     */
    create<T extends UsageRecordCreateArgs>(args: SelectSubset<T, UsageRecordCreateArgs<ExtArgs>>): Prisma__UsageRecordClient<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsageRecords.
     * @param {UsageRecordCreateManyArgs} args - Arguments to create many UsageRecords.
     * @example
     * // Create many UsageRecords
     * const usageRecord = await prisma.usageRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageRecordCreateManyArgs>(args?: SelectSubset<T, UsageRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageRecords and returns the data saved in the database.
     * @param {UsageRecordCreateManyAndReturnArgs} args - Arguments to create many UsageRecords.
     * @example
     * // Create many UsageRecords
     * const usageRecord = await prisma.usageRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageRecords and only return the `id`
     * const usageRecordWithIdOnly = await prisma.usageRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsageRecord.
     * @param {UsageRecordDeleteArgs} args - Arguments to delete one UsageRecord.
     * @example
     * // Delete one UsageRecord
     * const UsageRecord = await prisma.usageRecord.delete({
     *   where: {
     *     // ... filter to delete one UsageRecord
     *   }
     * })
     * 
     */
    delete<T extends UsageRecordDeleteArgs>(args: SelectSubset<T, UsageRecordDeleteArgs<ExtArgs>>): Prisma__UsageRecordClient<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsageRecord.
     * @param {UsageRecordUpdateArgs} args - Arguments to update one UsageRecord.
     * @example
     * // Update one UsageRecord
     * const usageRecord = await prisma.usageRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageRecordUpdateArgs>(args: SelectSubset<T, UsageRecordUpdateArgs<ExtArgs>>): Prisma__UsageRecordClient<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsageRecords.
     * @param {UsageRecordDeleteManyArgs} args - Arguments to filter UsageRecords to delete.
     * @example
     * // Delete a few UsageRecords
     * const { count } = await prisma.usageRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageRecordDeleteManyArgs>(args?: SelectSubset<T, UsageRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageRecords
     * const usageRecord = await prisma.usageRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageRecordUpdateManyArgs>(args: SelectSubset<T, UsageRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageRecords and returns the data updated in the database.
     * @param {UsageRecordUpdateManyAndReturnArgs} args - Arguments to update many UsageRecords.
     * @example
     * // Update many UsageRecords
     * const usageRecord = await prisma.usageRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsageRecords and only return the `id`
     * const usageRecordWithIdOnly = await prisma.usageRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsageRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, UsageRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsageRecord.
     * @param {UsageRecordUpsertArgs} args - Arguments to update or create a UsageRecord.
     * @example
     * // Update or create a UsageRecord
     * const usageRecord = await prisma.usageRecord.upsert({
     *   create: {
     *     // ... data to create a UsageRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageRecord we want to update
     *   }
     * })
     */
    upsert<T extends UsageRecordUpsertArgs>(args: SelectSubset<T, UsageRecordUpsertArgs<ExtArgs>>): Prisma__UsageRecordClient<$Result.GetResult<Prisma.$UsageRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsageRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageRecordCountArgs} args - Arguments to filter UsageRecords to count.
     * @example
     * // Count the number of UsageRecords
     * const count = await prisma.usageRecord.count({
     *   where: {
     *     // ... the filter for the UsageRecords we want to count
     *   }
     * })
    **/
    count<T extends UsageRecordCountArgs>(
      args?: Subset<T, UsageRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsageRecordAggregateArgs>(args: Subset<T, UsageRecordAggregateArgs>): Prisma.PrismaPromise<GetUsageRecordAggregateType<T>>

    /**
     * Group by UsageRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsageRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageRecordGroupByArgs['orderBy'] }
        : { orderBy?: UsageRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsageRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageRecord model
   */
  readonly fields: UsageRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UsageRecord model
   */
  interface UsageRecordFieldRefs {
    readonly id: FieldRef<"UsageRecord", 'String'>
    readonly userId: FieldRef<"UsageRecord", 'String'>
    readonly type: FieldRef<"UsageRecord", 'UsageType'>
    readonly count: FieldRef<"UsageRecord", 'Int'>
    readonly date: FieldRef<"UsageRecord", 'DateTime'>
    readonly createdAt: FieldRef<"UsageRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageRecord findUnique
   */
  export type UsageRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    /**
     * Filter, which UsageRecord to fetch.
     */
    where: UsageRecordWhereUniqueInput
  }

  /**
   * UsageRecord findUniqueOrThrow
   */
  export type UsageRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    /**
     * Filter, which UsageRecord to fetch.
     */
    where: UsageRecordWhereUniqueInput
  }

  /**
   * UsageRecord findFirst
   */
  export type UsageRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    /**
     * Filter, which UsageRecord to fetch.
     */
    where?: UsageRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageRecords to fetch.
     */
    orderBy?: UsageRecordOrderByWithRelationInput | UsageRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageRecords.
     */
    cursor?: UsageRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageRecords.
     */
    distinct?: UsageRecordScalarFieldEnum | UsageRecordScalarFieldEnum[]
  }

  /**
   * UsageRecord findFirstOrThrow
   */
  export type UsageRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    /**
     * Filter, which UsageRecord to fetch.
     */
    where?: UsageRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageRecords to fetch.
     */
    orderBy?: UsageRecordOrderByWithRelationInput | UsageRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageRecords.
     */
    cursor?: UsageRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageRecords.
     */
    distinct?: UsageRecordScalarFieldEnum | UsageRecordScalarFieldEnum[]
  }

  /**
   * UsageRecord findMany
   */
  export type UsageRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    /**
     * Filter, which UsageRecords to fetch.
     */
    where?: UsageRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageRecords to fetch.
     */
    orderBy?: UsageRecordOrderByWithRelationInput | UsageRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageRecords.
     */
    cursor?: UsageRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageRecords.
     */
    skip?: number
    distinct?: UsageRecordScalarFieldEnum | UsageRecordScalarFieldEnum[]
  }

  /**
   * UsageRecord create
   */
  export type UsageRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageRecord.
     */
    data: XOR<UsageRecordCreateInput, UsageRecordUncheckedCreateInput>
  }

  /**
   * UsageRecord createMany
   */
  export type UsageRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageRecords.
     */
    data: UsageRecordCreateManyInput | UsageRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageRecord createManyAndReturn
   */
  export type UsageRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * The data used to create many UsageRecords.
     */
    data: UsageRecordCreateManyInput | UsageRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageRecord update
   */
  export type UsageRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageRecord.
     */
    data: XOR<UsageRecordUpdateInput, UsageRecordUncheckedUpdateInput>
    /**
     * Choose, which UsageRecord to update.
     */
    where: UsageRecordWhereUniqueInput
  }

  /**
   * UsageRecord updateMany
   */
  export type UsageRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageRecords.
     */
    data: XOR<UsageRecordUpdateManyMutationInput, UsageRecordUncheckedUpdateManyInput>
    /**
     * Filter which UsageRecords to update
     */
    where?: UsageRecordWhereInput
    /**
     * Limit how many UsageRecords to update.
     */
    limit?: number
  }

  /**
   * UsageRecord updateManyAndReturn
   */
  export type UsageRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * The data used to update UsageRecords.
     */
    data: XOR<UsageRecordUpdateManyMutationInput, UsageRecordUncheckedUpdateManyInput>
    /**
     * Filter which UsageRecords to update
     */
    where?: UsageRecordWhereInput
    /**
     * Limit how many UsageRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageRecord upsert
   */
  export type UsageRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageRecord to update in case it exists.
     */
    where: UsageRecordWhereUniqueInput
    /**
     * In case the UsageRecord found by the `where` argument doesn't exist, create a new UsageRecord with this data.
     */
    create: XOR<UsageRecordCreateInput, UsageRecordUncheckedCreateInput>
    /**
     * In case the UsageRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageRecordUpdateInput, UsageRecordUncheckedUpdateInput>
  }

  /**
   * UsageRecord delete
   */
  export type UsageRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
    /**
     * Filter which UsageRecord to delete.
     */
    where: UsageRecordWhereUniqueInput
  }

  /**
   * UsageRecord deleteMany
   */
  export type UsageRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageRecords to delete
     */
    where?: UsageRecordWhereInput
    /**
     * Limit how many UsageRecords to delete.
     */
    limit?: number
  }

  /**
   * UsageRecord without action
   */
  export type UsageRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageRecord
     */
    select?: UsageRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsageRecord
     */
    omit?: UsageRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageRecordInclude<ExtArgs> | null
  }


  /**
   * Model FeatureFlag
   */

  export type AggregateFeatureFlag = {
    _count: FeatureFlagCountAggregateOutputType | null
    _min: FeatureFlagMinAggregateOutputType | null
    _max: FeatureFlagMaxAggregateOutputType | null
  }

  export type FeatureFlagMinAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    description: string | null
    isGlobal: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureFlagMaxAggregateOutputType = {
    id: string | null
    key: string | null
    name: string | null
    description: string | null
    isGlobal: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeatureFlagCountAggregateOutputType = {
    id: number
    key: number
    name: number
    description: number
    enabledFor: number
    isGlobal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FeatureFlagMinAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    isGlobal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureFlagMaxAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    isGlobal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeatureFlagCountAggregateInputType = {
    id?: true
    key?: true
    name?: true
    description?: true
    enabledFor?: true
    isGlobal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FeatureFlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureFlag to aggregate.
     */
    where?: FeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureFlags to fetch.
     */
    orderBy?: FeatureFlagOrderByWithRelationInput | FeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeatureFlags
    **/
    _count?: true | FeatureFlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeatureFlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeatureFlagMaxAggregateInputType
  }

  export type GetFeatureFlagAggregateType<T extends FeatureFlagAggregateArgs> = {
        [P in keyof T & keyof AggregateFeatureFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeatureFlag[P]>
      : GetScalarType<T[P], AggregateFeatureFlag[P]>
  }




  export type FeatureFlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeatureFlagWhereInput
    orderBy?: FeatureFlagOrderByWithAggregationInput | FeatureFlagOrderByWithAggregationInput[]
    by: FeatureFlagScalarFieldEnum[] | FeatureFlagScalarFieldEnum
    having?: FeatureFlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeatureFlagCountAggregateInputType | true
    _min?: FeatureFlagMinAggregateInputType
    _max?: FeatureFlagMaxAggregateInputType
  }

  export type FeatureFlagGroupByOutputType = {
    id: string
    key: string
    name: string
    description: string | null
    enabledFor: $Enums.SubscriptionTier[]
    isGlobal: boolean
    createdAt: Date
    updatedAt: Date
    _count: FeatureFlagCountAggregateOutputType | null
    _min: FeatureFlagMinAggregateOutputType | null
    _max: FeatureFlagMaxAggregateOutputType | null
  }

  type GetFeatureFlagGroupByPayload<T extends FeatureFlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeatureFlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeatureFlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeatureFlagGroupByOutputType[P]>
            : GetScalarType<T[P], FeatureFlagGroupByOutputType[P]>
        }
      >
    >


  export type FeatureFlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    enabledFor?: boolean
    isGlobal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["featureFlag"]>

  export type FeatureFlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    enabledFor?: boolean
    isGlobal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["featureFlag"]>

  export type FeatureFlagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    enabledFor?: boolean
    isGlobal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["featureFlag"]>

  export type FeatureFlagSelectScalar = {
    id?: boolean
    key?: boolean
    name?: boolean
    description?: boolean
    enabledFor?: boolean
    isGlobal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeatureFlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "name" | "description" | "enabledFor" | "isGlobal" | "createdAt" | "updatedAt", ExtArgs["result"]["featureFlag"]>

  export type $FeatureFlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FeatureFlag"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      name: string
      description: string | null
      enabledFor: $Enums.SubscriptionTier[]
      isGlobal: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["featureFlag"]>
    composites: {}
  }

  type FeatureFlagGetPayload<S extends boolean | null | undefined | FeatureFlagDefaultArgs> = $Result.GetResult<Prisma.$FeatureFlagPayload, S>

  type FeatureFlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeatureFlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeatureFlagCountAggregateInputType | true
    }

  export interface FeatureFlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeatureFlag'], meta: { name: 'FeatureFlag' } }
    /**
     * Find zero or one FeatureFlag that matches the filter.
     * @param {FeatureFlagFindUniqueArgs} args - Arguments to find a FeatureFlag
     * @example
     * // Get one FeatureFlag
     * const featureFlag = await prisma.featureFlag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeatureFlagFindUniqueArgs>(args: SelectSubset<T, FeatureFlagFindUniqueArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FeatureFlag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeatureFlagFindUniqueOrThrowArgs} args - Arguments to find a FeatureFlag
     * @example
     * // Get one FeatureFlag
     * const featureFlag = await prisma.featureFlag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeatureFlagFindUniqueOrThrowArgs>(args: SelectSubset<T, FeatureFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureFlag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagFindFirstArgs} args - Arguments to find a FeatureFlag
     * @example
     * // Get one FeatureFlag
     * const featureFlag = await prisma.featureFlag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeatureFlagFindFirstArgs>(args?: SelectSubset<T, FeatureFlagFindFirstArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FeatureFlag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagFindFirstOrThrowArgs} args - Arguments to find a FeatureFlag
     * @example
     * // Get one FeatureFlag
     * const featureFlag = await prisma.featureFlag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeatureFlagFindFirstOrThrowArgs>(args?: SelectSubset<T, FeatureFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FeatureFlags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeatureFlags
     * const featureFlags = await prisma.featureFlag.findMany()
     * 
     * // Get first 10 FeatureFlags
     * const featureFlags = await prisma.featureFlag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const featureFlagWithIdOnly = await prisma.featureFlag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeatureFlagFindManyArgs>(args?: SelectSubset<T, FeatureFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FeatureFlag.
     * @param {FeatureFlagCreateArgs} args - Arguments to create a FeatureFlag.
     * @example
     * // Create one FeatureFlag
     * const FeatureFlag = await prisma.featureFlag.create({
     *   data: {
     *     // ... data to create a FeatureFlag
     *   }
     * })
     * 
     */
    create<T extends FeatureFlagCreateArgs>(args: SelectSubset<T, FeatureFlagCreateArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FeatureFlags.
     * @param {FeatureFlagCreateManyArgs} args - Arguments to create many FeatureFlags.
     * @example
     * // Create many FeatureFlags
     * const featureFlag = await prisma.featureFlag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeatureFlagCreateManyArgs>(args?: SelectSubset<T, FeatureFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FeatureFlags and returns the data saved in the database.
     * @param {FeatureFlagCreateManyAndReturnArgs} args - Arguments to create many FeatureFlags.
     * @example
     * // Create many FeatureFlags
     * const featureFlag = await prisma.featureFlag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FeatureFlags and only return the `id`
     * const featureFlagWithIdOnly = await prisma.featureFlag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeatureFlagCreateManyAndReturnArgs>(args?: SelectSubset<T, FeatureFlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FeatureFlag.
     * @param {FeatureFlagDeleteArgs} args - Arguments to delete one FeatureFlag.
     * @example
     * // Delete one FeatureFlag
     * const FeatureFlag = await prisma.featureFlag.delete({
     *   where: {
     *     // ... filter to delete one FeatureFlag
     *   }
     * })
     * 
     */
    delete<T extends FeatureFlagDeleteArgs>(args: SelectSubset<T, FeatureFlagDeleteArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FeatureFlag.
     * @param {FeatureFlagUpdateArgs} args - Arguments to update one FeatureFlag.
     * @example
     * // Update one FeatureFlag
     * const featureFlag = await prisma.featureFlag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeatureFlagUpdateArgs>(args: SelectSubset<T, FeatureFlagUpdateArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FeatureFlags.
     * @param {FeatureFlagDeleteManyArgs} args - Arguments to filter FeatureFlags to delete.
     * @example
     * // Delete a few FeatureFlags
     * const { count } = await prisma.featureFlag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeatureFlagDeleteManyArgs>(args?: SelectSubset<T, FeatureFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeatureFlags
     * const featureFlag = await prisma.featureFlag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeatureFlagUpdateManyArgs>(args: SelectSubset<T, FeatureFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeatureFlags and returns the data updated in the database.
     * @param {FeatureFlagUpdateManyAndReturnArgs} args - Arguments to update many FeatureFlags.
     * @example
     * // Update many FeatureFlags
     * const featureFlag = await prisma.featureFlag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FeatureFlags and only return the `id`
     * const featureFlagWithIdOnly = await prisma.featureFlag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeatureFlagUpdateManyAndReturnArgs>(args: SelectSubset<T, FeatureFlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FeatureFlag.
     * @param {FeatureFlagUpsertArgs} args - Arguments to update or create a FeatureFlag.
     * @example
     * // Update or create a FeatureFlag
     * const featureFlag = await prisma.featureFlag.upsert({
     *   create: {
     *     // ... data to create a FeatureFlag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeatureFlag we want to update
     *   }
     * })
     */
    upsert<T extends FeatureFlagUpsertArgs>(args: SelectSubset<T, FeatureFlagUpsertArgs<ExtArgs>>): Prisma__FeatureFlagClient<$Result.GetResult<Prisma.$FeatureFlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FeatureFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagCountArgs} args - Arguments to filter FeatureFlags to count.
     * @example
     * // Count the number of FeatureFlags
     * const count = await prisma.featureFlag.count({
     *   where: {
     *     // ... the filter for the FeatureFlags we want to count
     *   }
     * })
    **/
    count<T extends FeatureFlagCountArgs>(
      args?: Subset<T, FeatureFlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeatureFlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeatureFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeatureFlagAggregateArgs>(args: Subset<T, FeatureFlagAggregateArgs>): Prisma.PrismaPromise<GetFeatureFlagAggregateType<T>>

    /**
     * Group by FeatureFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeatureFlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeatureFlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeatureFlagGroupByArgs['orderBy'] }
        : { orderBy?: FeatureFlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeatureFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeatureFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeatureFlag model
   */
  readonly fields: FeatureFlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeatureFlag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeatureFlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FeatureFlag model
   */
  interface FeatureFlagFieldRefs {
    readonly id: FieldRef<"FeatureFlag", 'String'>
    readonly key: FieldRef<"FeatureFlag", 'String'>
    readonly name: FieldRef<"FeatureFlag", 'String'>
    readonly description: FieldRef<"FeatureFlag", 'String'>
    readonly enabledFor: FieldRef<"FeatureFlag", 'SubscriptionTier[]'>
    readonly isGlobal: FieldRef<"FeatureFlag", 'Boolean'>
    readonly createdAt: FieldRef<"FeatureFlag", 'DateTime'>
    readonly updatedAt: FieldRef<"FeatureFlag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FeatureFlag findUnique
   */
  export type FeatureFlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which FeatureFlag to fetch.
     */
    where: FeatureFlagWhereUniqueInput
  }

  /**
   * FeatureFlag findUniqueOrThrow
   */
  export type FeatureFlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which FeatureFlag to fetch.
     */
    where: FeatureFlagWhereUniqueInput
  }

  /**
   * FeatureFlag findFirst
   */
  export type FeatureFlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which FeatureFlag to fetch.
     */
    where?: FeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureFlags to fetch.
     */
    orderBy?: FeatureFlagOrderByWithRelationInput | FeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureFlags.
     */
    cursor?: FeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureFlags.
     */
    distinct?: FeatureFlagScalarFieldEnum | FeatureFlagScalarFieldEnum[]
  }

  /**
   * FeatureFlag findFirstOrThrow
   */
  export type FeatureFlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which FeatureFlag to fetch.
     */
    where?: FeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureFlags to fetch.
     */
    orderBy?: FeatureFlagOrderByWithRelationInput | FeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeatureFlags.
     */
    cursor?: FeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeatureFlags.
     */
    distinct?: FeatureFlagScalarFieldEnum | FeatureFlagScalarFieldEnum[]
  }

  /**
   * FeatureFlag findMany
   */
  export type FeatureFlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * Filter, which FeatureFlags to fetch.
     */
    where?: FeatureFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeatureFlags to fetch.
     */
    orderBy?: FeatureFlagOrderByWithRelationInput | FeatureFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeatureFlags.
     */
    cursor?: FeatureFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeatureFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeatureFlags.
     */
    skip?: number
    distinct?: FeatureFlagScalarFieldEnum | FeatureFlagScalarFieldEnum[]
  }

  /**
   * FeatureFlag create
   */
  export type FeatureFlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * The data needed to create a FeatureFlag.
     */
    data: XOR<FeatureFlagCreateInput, FeatureFlagUncheckedCreateInput>
  }

  /**
   * FeatureFlag createMany
   */
  export type FeatureFlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeatureFlags.
     */
    data: FeatureFlagCreateManyInput | FeatureFlagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureFlag createManyAndReturn
   */
  export type FeatureFlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * The data used to create many FeatureFlags.
     */
    data: FeatureFlagCreateManyInput | FeatureFlagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FeatureFlag update
   */
  export type FeatureFlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * The data needed to update a FeatureFlag.
     */
    data: XOR<FeatureFlagUpdateInput, FeatureFlagUncheckedUpdateInput>
    /**
     * Choose, which FeatureFlag to update.
     */
    where: FeatureFlagWhereUniqueInput
  }

  /**
   * FeatureFlag updateMany
   */
  export type FeatureFlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeatureFlags.
     */
    data: XOR<FeatureFlagUpdateManyMutationInput, FeatureFlagUncheckedUpdateManyInput>
    /**
     * Filter which FeatureFlags to update
     */
    where?: FeatureFlagWhereInput
    /**
     * Limit how many FeatureFlags to update.
     */
    limit?: number
  }

  /**
   * FeatureFlag updateManyAndReturn
   */
  export type FeatureFlagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * The data used to update FeatureFlags.
     */
    data: XOR<FeatureFlagUpdateManyMutationInput, FeatureFlagUncheckedUpdateManyInput>
    /**
     * Filter which FeatureFlags to update
     */
    where?: FeatureFlagWhereInput
    /**
     * Limit how many FeatureFlags to update.
     */
    limit?: number
  }

  /**
   * FeatureFlag upsert
   */
  export type FeatureFlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * The filter to search for the FeatureFlag to update in case it exists.
     */
    where: FeatureFlagWhereUniqueInput
    /**
     * In case the FeatureFlag found by the `where` argument doesn't exist, create a new FeatureFlag with this data.
     */
    create: XOR<FeatureFlagCreateInput, FeatureFlagUncheckedCreateInput>
    /**
     * In case the FeatureFlag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeatureFlagUpdateInput, FeatureFlagUncheckedUpdateInput>
  }

  /**
   * FeatureFlag delete
   */
  export type FeatureFlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
    /**
     * Filter which FeatureFlag to delete.
     */
    where: FeatureFlagWhereUniqueInput
  }

  /**
   * FeatureFlag deleteMany
   */
  export type FeatureFlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeatureFlags to delete
     */
    where?: FeatureFlagWhereInput
    /**
     * Limit how many FeatureFlags to delete.
     */
    limit?: number
  }

  /**
   * FeatureFlag without action
   */
  export type FeatureFlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeatureFlag
     */
    select?: FeatureFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FeatureFlag
     */
    omit?: FeatureFlagOmit<ExtArgs> | null
  }


  /**
   * Model RateLimitCounter
   */

  export type AggregateRateLimitCounter = {
    _count: RateLimitCounterCountAggregateOutputType | null
    _avg: RateLimitCounterAvgAggregateOutputType | null
    _sum: RateLimitCounterSumAggregateOutputType | null
    _min: RateLimitCounterMinAggregateOutputType | null
    _max: RateLimitCounterMaxAggregateOutputType | null
  }

  export type RateLimitCounterAvgAggregateOutputType = {
    count: number | null
  }

  export type RateLimitCounterSumAggregateOutputType = {
    count: number | null
  }

  export type RateLimitCounterMinAggregateOutputType = {
    id: string | null
    action: string | null
    scope: $Enums.RateLimitScope | null
    keyHash: string | null
    windowStart: Date | null
    windowEnd: Date | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RateLimitCounterMaxAggregateOutputType = {
    id: string | null
    action: string | null
    scope: $Enums.RateLimitScope | null
    keyHash: string | null
    windowStart: Date | null
    windowEnd: Date | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RateLimitCounterCountAggregateOutputType = {
    id: number
    action: number
    scope: number
    keyHash: number
    windowStart: number
    windowEnd: number
    count: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RateLimitCounterAvgAggregateInputType = {
    count?: true
  }

  export type RateLimitCounterSumAggregateInputType = {
    count?: true
  }

  export type RateLimitCounterMinAggregateInputType = {
    id?: true
    action?: true
    scope?: true
    keyHash?: true
    windowStart?: true
    windowEnd?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RateLimitCounterMaxAggregateInputType = {
    id?: true
    action?: true
    scope?: true
    keyHash?: true
    windowStart?: true
    windowEnd?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RateLimitCounterCountAggregateInputType = {
    id?: true
    action?: true
    scope?: true
    keyHash?: true
    windowStart?: true
    windowEnd?: true
    count?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RateLimitCounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitCounter to aggregate.
     */
    where?: RateLimitCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitCounters to fetch.
     */
    orderBy?: RateLimitCounterOrderByWithRelationInput | RateLimitCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateLimitCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RateLimitCounters
    **/
    _count?: true | RateLimitCounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateLimitCounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateLimitCounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateLimitCounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateLimitCounterMaxAggregateInputType
  }

  export type GetRateLimitCounterAggregateType<T extends RateLimitCounterAggregateArgs> = {
        [P in keyof T & keyof AggregateRateLimitCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRateLimitCounter[P]>
      : GetScalarType<T[P], AggregateRateLimitCounter[P]>
  }




  export type RateLimitCounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateLimitCounterWhereInput
    orderBy?: RateLimitCounterOrderByWithAggregationInput | RateLimitCounterOrderByWithAggregationInput[]
    by: RateLimitCounterScalarFieldEnum[] | RateLimitCounterScalarFieldEnum
    having?: RateLimitCounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateLimitCounterCountAggregateInputType | true
    _avg?: RateLimitCounterAvgAggregateInputType
    _sum?: RateLimitCounterSumAggregateInputType
    _min?: RateLimitCounterMinAggregateInputType
    _max?: RateLimitCounterMaxAggregateInputType
  }

  export type RateLimitCounterGroupByOutputType = {
    id: string
    action: string
    scope: $Enums.RateLimitScope
    keyHash: string
    windowStart: Date
    windowEnd: Date
    count: number
    createdAt: Date
    updatedAt: Date
    _count: RateLimitCounterCountAggregateOutputType | null
    _avg: RateLimitCounterAvgAggregateOutputType | null
    _sum: RateLimitCounterSumAggregateOutputType | null
    _min: RateLimitCounterMinAggregateOutputType | null
    _max: RateLimitCounterMaxAggregateOutputType | null
  }

  type GetRateLimitCounterGroupByPayload<T extends RateLimitCounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateLimitCounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateLimitCounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateLimitCounterGroupByOutputType[P]>
            : GetScalarType<T[P], RateLimitCounterGroupByOutputType[P]>
        }
      >
    >


  export type RateLimitCounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    scope?: boolean
    keyHash?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rateLimitCounter"]>

  export type RateLimitCounterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    scope?: boolean
    keyHash?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rateLimitCounter"]>

  export type RateLimitCounterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    scope?: boolean
    keyHash?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rateLimitCounter"]>

  export type RateLimitCounterSelectScalar = {
    id?: boolean
    action?: boolean
    scope?: boolean
    keyHash?: boolean
    windowStart?: boolean
    windowEnd?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RateLimitCounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "scope" | "keyHash" | "windowStart" | "windowEnd" | "count" | "createdAt" | "updatedAt", ExtArgs["result"]["rateLimitCounter"]>

  export type $RateLimitCounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RateLimitCounter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: string
      scope: $Enums.RateLimitScope
      keyHash: string
      windowStart: Date
      windowEnd: Date
      count: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rateLimitCounter"]>
    composites: {}
  }

  type RateLimitCounterGetPayload<S extends boolean | null | undefined | RateLimitCounterDefaultArgs> = $Result.GetResult<Prisma.$RateLimitCounterPayload, S>

  type RateLimitCounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateLimitCounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateLimitCounterCountAggregateInputType | true
    }

  export interface RateLimitCounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RateLimitCounter'], meta: { name: 'RateLimitCounter' } }
    /**
     * Find zero or one RateLimitCounter that matches the filter.
     * @param {RateLimitCounterFindUniqueArgs} args - Arguments to find a RateLimitCounter
     * @example
     * // Get one RateLimitCounter
     * const rateLimitCounter = await prisma.rateLimitCounter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateLimitCounterFindUniqueArgs>(args: SelectSubset<T, RateLimitCounterFindUniqueArgs<ExtArgs>>): Prisma__RateLimitCounterClient<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RateLimitCounter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateLimitCounterFindUniqueOrThrowArgs} args - Arguments to find a RateLimitCounter
     * @example
     * // Get one RateLimitCounter
     * const rateLimitCounter = await prisma.rateLimitCounter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateLimitCounterFindUniqueOrThrowArgs>(args: SelectSubset<T, RateLimitCounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateLimitCounterClient<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitCounter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitCounterFindFirstArgs} args - Arguments to find a RateLimitCounter
     * @example
     * // Get one RateLimitCounter
     * const rateLimitCounter = await prisma.rateLimitCounter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateLimitCounterFindFirstArgs>(args?: SelectSubset<T, RateLimitCounterFindFirstArgs<ExtArgs>>): Prisma__RateLimitCounterClient<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateLimitCounter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitCounterFindFirstOrThrowArgs} args - Arguments to find a RateLimitCounter
     * @example
     * // Get one RateLimitCounter
     * const rateLimitCounter = await prisma.rateLimitCounter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateLimitCounterFindFirstOrThrowArgs>(args?: SelectSubset<T, RateLimitCounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateLimitCounterClient<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RateLimitCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitCounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RateLimitCounters
     * const rateLimitCounters = await prisma.rateLimitCounter.findMany()
     * 
     * // Get first 10 RateLimitCounters
     * const rateLimitCounters = await prisma.rateLimitCounter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rateLimitCounterWithIdOnly = await prisma.rateLimitCounter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RateLimitCounterFindManyArgs>(args?: SelectSubset<T, RateLimitCounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RateLimitCounter.
     * @param {RateLimitCounterCreateArgs} args - Arguments to create a RateLimitCounter.
     * @example
     * // Create one RateLimitCounter
     * const RateLimitCounter = await prisma.rateLimitCounter.create({
     *   data: {
     *     // ... data to create a RateLimitCounter
     *   }
     * })
     * 
     */
    create<T extends RateLimitCounterCreateArgs>(args: SelectSubset<T, RateLimitCounterCreateArgs<ExtArgs>>): Prisma__RateLimitCounterClient<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RateLimitCounters.
     * @param {RateLimitCounterCreateManyArgs} args - Arguments to create many RateLimitCounters.
     * @example
     * // Create many RateLimitCounters
     * const rateLimitCounter = await prisma.rateLimitCounter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateLimitCounterCreateManyArgs>(args?: SelectSubset<T, RateLimitCounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RateLimitCounters and returns the data saved in the database.
     * @param {RateLimitCounterCreateManyAndReturnArgs} args - Arguments to create many RateLimitCounters.
     * @example
     * // Create many RateLimitCounters
     * const rateLimitCounter = await prisma.rateLimitCounter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RateLimitCounters and only return the `id`
     * const rateLimitCounterWithIdOnly = await prisma.rateLimitCounter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateLimitCounterCreateManyAndReturnArgs>(args?: SelectSubset<T, RateLimitCounterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RateLimitCounter.
     * @param {RateLimitCounterDeleteArgs} args - Arguments to delete one RateLimitCounter.
     * @example
     * // Delete one RateLimitCounter
     * const RateLimitCounter = await prisma.rateLimitCounter.delete({
     *   where: {
     *     // ... filter to delete one RateLimitCounter
     *   }
     * })
     * 
     */
    delete<T extends RateLimitCounterDeleteArgs>(args: SelectSubset<T, RateLimitCounterDeleteArgs<ExtArgs>>): Prisma__RateLimitCounterClient<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RateLimitCounter.
     * @param {RateLimitCounterUpdateArgs} args - Arguments to update one RateLimitCounter.
     * @example
     * // Update one RateLimitCounter
     * const rateLimitCounter = await prisma.rateLimitCounter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateLimitCounterUpdateArgs>(args: SelectSubset<T, RateLimitCounterUpdateArgs<ExtArgs>>): Prisma__RateLimitCounterClient<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RateLimitCounters.
     * @param {RateLimitCounterDeleteManyArgs} args - Arguments to filter RateLimitCounters to delete.
     * @example
     * // Delete a few RateLimitCounters
     * const { count } = await prisma.rateLimitCounter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateLimitCounterDeleteManyArgs>(args?: SelectSubset<T, RateLimitCounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitCounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RateLimitCounters
     * const rateLimitCounter = await prisma.rateLimitCounter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateLimitCounterUpdateManyArgs>(args: SelectSubset<T, RateLimitCounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateLimitCounters and returns the data updated in the database.
     * @param {RateLimitCounterUpdateManyAndReturnArgs} args - Arguments to update many RateLimitCounters.
     * @example
     * // Update many RateLimitCounters
     * const rateLimitCounter = await prisma.rateLimitCounter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RateLimitCounters and only return the `id`
     * const rateLimitCounterWithIdOnly = await prisma.rateLimitCounter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RateLimitCounterUpdateManyAndReturnArgs>(args: SelectSubset<T, RateLimitCounterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RateLimitCounter.
     * @param {RateLimitCounterUpsertArgs} args - Arguments to update or create a RateLimitCounter.
     * @example
     * // Update or create a RateLimitCounter
     * const rateLimitCounter = await prisma.rateLimitCounter.upsert({
     *   create: {
     *     // ... data to create a RateLimitCounter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RateLimitCounter we want to update
     *   }
     * })
     */
    upsert<T extends RateLimitCounterUpsertArgs>(args: SelectSubset<T, RateLimitCounterUpsertArgs<ExtArgs>>): Prisma__RateLimitCounterClient<$Result.GetResult<Prisma.$RateLimitCounterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RateLimitCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitCounterCountArgs} args - Arguments to filter RateLimitCounters to count.
     * @example
     * // Count the number of RateLimitCounters
     * const count = await prisma.rateLimitCounter.count({
     *   where: {
     *     // ... the filter for the RateLimitCounters we want to count
     *   }
     * })
    **/
    count<T extends RateLimitCounterCountArgs>(
      args?: Subset<T, RateLimitCounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateLimitCounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RateLimitCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitCounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RateLimitCounterAggregateArgs>(args: Subset<T, RateLimitCounterAggregateArgs>): Prisma.PrismaPromise<GetRateLimitCounterAggregateType<T>>

    /**
     * Group by RateLimitCounter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateLimitCounterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RateLimitCounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateLimitCounterGroupByArgs['orderBy'] }
        : { orderBy?: RateLimitCounterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RateLimitCounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateLimitCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RateLimitCounter model
   */
  readonly fields: RateLimitCounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RateLimitCounter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateLimitCounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RateLimitCounter model
   */
  interface RateLimitCounterFieldRefs {
    readonly id: FieldRef<"RateLimitCounter", 'String'>
    readonly action: FieldRef<"RateLimitCounter", 'String'>
    readonly scope: FieldRef<"RateLimitCounter", 'RateLimitScope'>
    readonly keyHash: FieldRef<"RateLimitCounter", 'String'>
    readonly windowStart: FieldRef<"RateLimitCounter", 'DateTime'>
    readonly windowEnd: FieldRef<"RateLimitCounter", 'DateTime'>
    readonly count: FieldRef<"RateLimitCounter", 'Int'>
    readonly createdAt: FieldRef<"RateLimitCounter", 'DateTime'>
    readonly updatedAt: FieldRef<"RateLimitCounter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RateLimitCounter findUnique
   */
  export type RateLimitCounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitCounter to fetch.
     */
    where: RateLimitCounterWhereUniqueInput
  }

  /**
   * RateLimitCounter findUniqueOrThrow
   */
  export type RateLimitCounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitCounter to fetch.
     */
    where: RateLimitCounterWhereUniqueInput
  }

  /**
   * RateLimitCounter findFirst
   */
  export type RateLimitCounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitCounter to fetch.
     */
    where?: RateLimitCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitCounters to fetch.
     */
    orderBy?: RateLimitCounterOrderByWithRelationInput | RateLimitCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitCounters.
     */
    cursor?: RateLimitCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitCounters.
     */
    distinct?: RateLimitCounterScalarFieldEnum | RateLimitCounterScalarFieldEnum[]
  }

  /**
   * RateLimitCounter findFirstOrThrow
   */
  export type RateLimitCounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitCounter to fetch.
     */
    where?: RateLimitCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitCounters to fetch.
     */
    orderBy?: RateLimitCounterOrderByWithRelationInput | RateLimitCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateLimitCounters.
     */
    cursor?: RateLimitCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateLimitCounters.
     */
    distinct?: RateLimitCounterScalarFieldEnum | RateLimitCounterScalarFieldEnum[]
  }

  /**
   * RateLimitCounter findMany
   */
  export type RateLimitCounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * Filter, which RateLimitCounters to fetch.
     */
    where?: RateLimitCounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateLimitCounters to fetch.
     */
    orderBy?: RateLimitCounterOrderByWithRelationInput | RateLimitCounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RateLimitCounters.
     */
    cursor?: RateLimitCounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateLimitCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateLimitCounters.
     */
    skip?: number
    distinct?: RateLimitCounterScalarFieldEnum | RateLimitCounterScalarFieldEnum[]
  }

  /**
   * RateLimitCounter create
   */
  export type RateLimitCounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * The data needed to create a RateLimitCounter.
     */
    data: XOR<RateLimitCounterCreateInput, RateLimitCounterUncheckedCreateInput>
  }

  /**
   * RateLimitCounter createMany
   */
  export type RateLimitCounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RateLimitCounters.
     */
    data: RateLimitCounterCreateManyInput | RateLimitCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitCounter createManyAndReturn
   */
  export type RateLimitCounterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * The data used to create many RateLimitCounters.
     */
    data: RateLimitCounterCreateManyInput | RateLimitCounterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RateLimitCounter update
   */
  export type RateLimitCounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * The data needed to update a RateLimitCounter.
     */
    data: XOR<RateLimitCounterUpdateInput, RateLimitCounterUncheckedUpdateInput>
    /**
     * Choose, which RateLimitCounter to update.
     */
    where: RateLimitCounterWhereUniqueInput
  }

  /**
   * RateLimitCounter updateMany
   */
  export type RateLimitCounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RateLimitCounters.
     */
    data: XOR<RateLimitCounterUpdateManyMutationInput, RateLimitCounterUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitCounters to update
     */
    where?: RateLimitCounterWhereInput
    /**
     * Limit how many RateLimitCounters to update.
     */
    limit?: number
  }

  /**
   * RateLimitCounter updateManyAndReturn
   */
  export type RateLimitCounterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * The data used to update RateLimitCounters.
     */
    data: XOR<RateLimitCounterUpdateManyMutationInput, RateLimitCounterUncheckedUpdateManyInput>
    /**
     * Filter which RateLimitCounters to update
     */
    where?: RateLimitCounterWhereInput
    /**
     * Limit how many RateLimitCounters to update.
     */
    limit?: number
  }

  /**
   * RateLimitCounter upsert
   */
  export type RateLimitCounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * The filter to search for the RateLimitCounter to update in case it exists.
     */
    where: RateLimitCounterWhereUniqueInput
    /**
     * In case the RateLimitCounter found by the `where` argument doesn't exist, create a new RateLimitCounter with this data.
     */
    create: XOR<RateLimitCounterCreateInput, RateLimitCounterUncheckedCreateInput>
    /**
     * In case the RateLimitCounter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateLimitCounterUpdateInput, RateLimitCounterUncheckedUpdateInput>
  }

  /**
   * RateLimitCounter delete
   */
  export type RateLimitCounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
    /**
     * Filter which RateLimitCounter to delete.
     */
    where: RateLimitCounterWhereUniqueInput
  }

  /**
   * RateLimitCounter deleteMany
   */
  export type RateLimitCounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateLimitCounters to delete
     */
    where?: RateLimitCounterWhereInput
    /**
     * Limit how many RateLimitCounters to delete.
     */
    limit?: number
  }

  /**
   * RateLimitCounter without action
   */
  export type RateLimitCounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateLimitCounter
     */
    select?: RateLimitCounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateLimitCounter
     */
    omit?: RateLimitCounterOmit<ExtArgs> | null
  }


  /**
   * Model EmailJob
   */

  export type AggregateEmailJob = {
    _count: EmailJobCountAggregateOutputType | null
    _avg: EmailJobAvgAggregateOutputType | null
    _sum: EmailJobSumAggregateOutputType | null
    _min: EmailJobMinAggregateOutputType | null
    _max: EmailJobMaxAggregateOutputType | null
  }

  export type EmailJobAvgAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type EmailJobSumAggregateOutputType = {
    attempts: number | null
    maxAttempts: number | null
  }

  export type EmailJobMinAggregateOutputType = {
    id: string | null
    type: $Enums.EmailJobType | null
    toEmail: string | null
    status: $Enums.EmailJobStatus | null
    attempts: number | null
    maxAttempts: number | null
    nextAttemptAt: Date | null
    lastAttemptAt: Date | null
    sentAt: Date | null
    lastError: string | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailJobMaxAggregateOutputType = {
    id: string | null
    type: $Enums.EmailJobType | null
    toEmail: string | null
    status: $Enums.EmailJobStatus | null
    attempts: number | null
    maxAttempts: number | null
    nextAttemptAt: Date | null
    lastAttemptAt: Date | null
    sentAt: Date | null
    lastError: string | null
    idempotencyKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EmailJobCountAggregateOutputType = {
    id: number
    type: number
    toEmail: number
    payload: number
    status: number
    attempts: number
    maxAttempts: number
    nextAttemptAt: number
    lastAttemptAt: number
    sentAt: number
    lastError: number
    idempotencyKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EmailJobAvgAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type EmailJobSumAggregateInputType = {
    attempts?: true
    maxAttempts?: true
  }

  export type EmailJobMinAggregateInputType = {
    id?: true
    type?: true
    toEmail?: true
    status?: true
    attempts?: true
    maxAttempts?: true
    nextAttemptAt?: true
    lastAttemptAt?: true
    sentAt?: true
    lastError?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailJobMaxAggregateInputType = {
    id?: true
    type?: true
    toEmail?: true
    status?: true
    attempts?: true
    maxAttempts?: true
    nextAttemptAt?: true
    lastAttemptAt?: true
    sentAt?: true
    lastError?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EmailJobCountAggregateInputType = {
    id?: true
    type?: true
    toEmail?: true
    payload?: true
    status?: true
    attempts?: true
    maxAttempts?: true
    nextAttemptAt?: true
    lastAttemptAt?: true
    sentAt?: true
    lastError?: true
    idempotencyKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EmailJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailJob to aggregate.
     */
    where?: EmailJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailJobs to fetch.
     */
    orderBy?: EmailJobOrderByWithRelationInput | EmailJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailJobs
    **/
    _count?: true | EmailJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailJobMaxAggregateInputType
  }

  export type GetEmailJobAggregateType<T extends EmailJobAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailJob[P]>
      : GetScalarType<T[P], AggregateEmailJob[P]>
  }




  export type EmailJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailJobWhereInput
    orderBy?: EmailJobOrderByWithAggregationInput | EmailJobOrderByWithAggregationInput[]
    by: EmailJobScalarFieldEnum[] | EmailJobScalarFieldEnum
    having?: EmailJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailJobCountAggregateInputType | true
    _avg?: EmailJobAvgAggregateInputType
    _sum?: EmailJobSumAggregateInputType
    _min?: EmailJobMinAggregateInputType
    _max?: EmailJobMaxAggregateInputType
  }

  export type EmailJobGroupByOutputType = {
    id: string
    type: $Enums.EmailJobType
    toEmail: string
    payload: JsonValue
    status: $Enums.EmailJobStatus
    attempts: number
    maxAttempts: number
    nextAttemptAt: Date
    lastAttemptAt: Date | null
    sentAt: Date | null
    lastError: string | null
    idempotencyKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: EmailJobCountAggregateOutputType | null
    _avg: EmailJobAvgAggregateOutputType | null
    _sum: EmailJobSumAggregateOutputType | null
    _min: EmailJobMinAggregateOutputType | null
    _max: EmailJobMaxAggregateOutputType | null
  }

  type GetEmailJobGroupByPayload<T extends EmailJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailJobGroupByOutputType[P]>
            : GetScalarType<T[P], EmailJobGroupByOutputType[P]>
        }
      >
    >


  export type EmailJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    toEmail?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    nextAttemptAt?: boolean
    lastAttemptAt?: boolean
    sentAt?: boolean
    lastError?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailJob"]>

  export type EmailJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    toEmail?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    nextAttemptAt?: boolean
    lastAttemptAt?: boolean
    sentAt?: boolean
    lastError?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailJob"]>

  export type EmailJobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    toEmail?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    nextAttemptAt?: boolean
    lastAttemptAt?: boolean
    sentAt?: boolean
    lastError?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["emailJob"]>

  export type EmailJobSelectScalar = {
    id?: boolean
    type?: boolean
    toEmail?: boolean
    payload?: boolean
    status?: boolean
    attempts?: boolean
    maxAttempts?: boolean
    nextAttemptAt?: boolean
    lastAttemptAt?: boolean
    sentAt?: boolean
    lastError?: boolean
    idempotencyKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EmailJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "toEmail" | "payload" | "status" | "attempts" | "maxAttempts" | "nextAttemptAt" | "lastAttemptAt" | "sentAt" | "lastError" | "idempotencyKey" | "createdAt" | "updatedAt", ExtArgs["result"]["emailJob"]>

  export type $EmailJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailJob"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.EmailJobType
      toEmail: string
      payload: Prisma.JsonValue
      status: $Enums.EmailJobStatus
      attempts: number
      maxAttempts: number
      nextAttemptAt: Date
      lastAttemptAt: Date | null
      sentAt: Date | null
      lastError: string | null
      idempotencyKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["emailJob"]>
    composites: {}
  }

  type EmailJobGetPayload<S extends boolean | null | undefined | EmailJobDefaultArgs> = $Result.GetResult<Prisma.$EmailJobPayload, S>

  type EmailJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailJobCountAggregateInputType | true
    }

  export interface EmailJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailJob'], meta: { name: 'EmailJob' } }
    /**
     * Find zero or one EmailJob that matches the filter.
     * @param {EmailJobFindUniqueArgs} args - Arguments to find a EmailJob
     * @example
     * // Get one EmailJob
     * const emailJob = await prisma.emailJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailJobFindUniqueArgs>(args: SelectSubset<T, EmailJobFindUniqueArgs<ExtArgs>>): Prisma__EmailJobClient<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailJobFindUniqueOrThrowArgs} args - Arguments to find a EmailJob
     * @example
     * // Get one EmailJob
     * const emailJob = await prisma.emailJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailJobFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailJobClient<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailJobFindFirstArgs} args - Arguments to find a EmailJob
     * @example
     * // Get one EmailJob
     * const emailJob = await prisma.emailJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailJobFindFirstArgs>(args?: SelectSubset<T, EmailJobFindFirstArgs<ExtArgs>>): Prisma__EmailJobClient<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailJobFindFirstOrThrowArgs} args - Arguments to find a EmailJob
     * @example
     * // Get one EmailJob
     * const emailJob = await prisma.emailJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailJobFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailJobClient<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailJobs
     * const emailJobs = await prisma.emailJob.findMany()
     * 
     * // Get first 10 EmailJobs
     * const emailJobs = await prisma.emailJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailJobWithIdOnly = await prisma.emailJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailJobFindManyArgs>(args?: SelectSubset<T, EmailJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailJob.
     * @param {EmailJobCreateArgs} args - Arguments to create a EmailJob.
     * @example
     * // Create one EmailJob
     * const EmailJob = await prisma.emailJob.create({
     *   data: {
     *     // ... data to create a EmailJob
     *   }
     * })
     * 
     */
    create<T extends EmailJobCreateArgs>(args: SelectSubset<T, EmailJobCreateArgs<ExtArgs>>): Prisma__EmailJobClient<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailJobs.
     * @param {EmailJobCreateManyArgs} args - Arguments to create many EmailJobs.
     * @example
     * // Create many EmailJobs
     * const emailJob = await prisma.emailJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailJobCreateManyArgs>(args?: SelectSubset<T, EmailJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailJobs and returns the data saved in the database.
     * @param {EmailJobCreateManyAndReturnArgs} args - Arguments to create many EmailJobs.
     * @example
     * // Create many EmailJobs
     * const emailJob = await prisma.emailJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailJobs and only return the `id`
     * const emailJobWithIdOnly = await prisma.emailJob.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailJobCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailJob.
     * @param {EmailJobDeleteArgs} args - Arguments to delete one EmailJob.
     * @example
     * // Delete one EmailJob
     * const EmailJob = await prisma.emailJob.delete({
     *   where: {
     *     // ... filter to delete one EmailJob
     *   }
     * })
     * 
     */
    delete<T extends EmailJobDeleteArgs>(args: SelectSubset<T, EmailJobDeleteArgs<ExtArgs>>): Prisma__EmailJobClient<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailJob.
     * @param {EmailJobUpdateArgs} args - Arguments to update one EmailJob.
     * @example
     * // Update one EmailJob
     * const emailJob = await prisma.emailJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailJobUpdateArgs>(args: SelectSubset<T, EmailJobUpdateArgs<ExtArgs>>): Prisma__EmailJobClient<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailJobs.
     * @param {EmailJobDeleteManyArgs} args - Arguments to filter EmailJobs to delete.
     * @example
     * // Delete a few EmailJobs
     * const { count } = await prisma.emailJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailJobDeleteManyArgs>(args?: SelectSubset<T, EmailJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailJobs
     * const emailJob = await prisma.emailJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailJobUpdateManyArgs>(args: SelectSubset<T, EmailJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailJobs and returns the data updated in the database.
     * @param {EmailJobUpdateManyAndReturnArgs} args - Arguments to update many EmailJobs.
     * @example
     * // Update many EmailJobs
     * const emailJob = await prisma.emailJob.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailJobs and only return the `id`
     * const emailJobWithIdOnly = await prisma.emailJob.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailJobUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailJobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailJob.
     * @param {EmailJobUpsertArgs} args - Arguments to update or create a EmailJob.
     * @example
     * // Update or create a EmailJob
     * const emailJob = await prisma.emailJob.upsert({
     *   create: {
     *     // ... data to create a EmailJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailJob we want to update
     *   }
     * })
     */
    upsert<T extends EmailJobUpsertArgs>(args: SelectSubset<T, EmailJobUpsertArgs<ExtArgs>>): Prisma__EmailJobClient<$Result.GetResult<Prisma.$EmailJobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailJobCountArgs} args - Arguments to filter EmailJobs to count.
     * @example
     * // Count the number of EmailJobs
     * const count = await prisma.emailJob.count({
     *   where: {
     *     // ... the filter for the EmailJobs we want to count
     *   }
     * })
    **/
    count<T extends EmailJobCountArgs>(
      args?: Subset<T, EmailJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailJobAggregateArgs>(args: Subset<T, EmailJobAggregateArgs>): Prisma.PrismaPromise<GetEmailJobAggregateType<T>>

    /**
     * Group by EmailJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailJobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailJobGroupByArgs['orderBy'] }
        : { orderBy?: EmailJobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailJob model
   */
  readonly fields: EmailJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailJob model
   */
  interface EmailJobFieldRefs {
    readonly id: FieldRef<"EmailJob", 'String'>
    readonly type: FieldRef<"EmailJob", 'EmailJobType'>
    readonly toEmail: FieldRef<"EmailJob", 'String'>
    readonly payload: FieldRef<"EmailJob", 'Json'>
    readonly status: FieldRef<"EmailJob", 'EmailJobStatus'>
    readonly attempts: FieldRef<"EmailJob", 'Int'>
    readonly maxAttempts: FieldRef<"EmailJob", 'Int'>
    readonly nextAttemptAt: FieldRef<"EmailJob", 'DateTime'>
    readonly lastAttemptAt: FieldRef<"EmailJob", 'DateTime'>
    readonly sentAt: FieldRef<"EmailJob", 'DateTime'>
    readonly lastError: FieldRef<"EmailJob", 'String'>
    readonly idempotencyKey: FieldRef<"EmailJob", 'String'>
    readonly createdAt: FieldRef<"EmailJob", 'DateTime'>
    readonly updatedAt: FieldRef<"EmailJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailJob findUnique
   */
  export type EmailJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * Filter, which EmailJob to fetch.
     */
    where: EmailJobWhereUniqueInput
  }

  /**
   * EmailJob findUniqueOrThrow
   */
  export type EmailJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * Filter, which EmailJob to fetch.
     */
    where: EmailJobWhereUniqueInput
  }

  /**
   * EmailJob findFirst
   */
  export type EmailJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * Filter, which EmailJob to fetch.
     */
    where?: EmailJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailJobs to fetch.
     */
    orderBy?: EmailJobOrderByWithRelationInput | EmailJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailJobs.
     */
    cursor?: EmailJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailJobs.
     */
    distinct?: EmailJobScalarFieldEnum | EmailJobScalarFieldEnum[]
  }

  /**
   * EmailJob findFirstOrThrow
   */
  export type EmailJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * Filter, which EmailJob to fetch.
     */
    where?: EmailJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailJobs to fetch.
     */
    orderBy?: EmailJobOrderByWithRelationInput | EmailJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailJobs.
     */
    cursor?: EmailJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailJobs.
     */
    distinct?: EmailJobScalarFieldEnum | EmailJobScalarFieldEnum[]
  }

  /**
   * EmailJob findMany
   */
  export type EmailJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * Filter, which EmailJobs to fetch.
     */
    where?: EmailJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailJobs to fetch.
     */
    orderBy?: EmailJobOrderByWithRelationInput | EmailJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailJobs.
     */
    cursor?: EmailJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailJobs.
     */
    skip?: number
    distinct?: EmailJobScalarFieldEnum | EmailJobScalarFieldEnum[]
  }

  /**
   * EmailJob create
   */
  export type EmailJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailJob.
     */
    data: XOR<EmailJobCreateInput, EmailJobUncheckedCreateInput>
  }

  /**
   * EmailJob createMany
   */
  export type EmailJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailJobs.
     */
    data: EmailJobCreateManyInput | EmailJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailJob createManyAndReturn
   */
  export type EmailJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * The data used to create many EmailJobs.
     */
    data: EmailJobCreateManyInput | EmailJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailJob update
   */
  export type EmailJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailJob.
     */
    data: XOR<EmailJobUpdateInput, EmailJobUncheckedUpdateInput>
    /**
     * Choose, which EmailJob to update.
     */
    where: EmailJobWhereUniqueInput
  }

  /**
   * EmailJob updateMany
   */
  export type EmailJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailJobs.
     */
    data: XOR<EmailJobUpdateManyMutationInput, EmailJobUncheckedUpdateManyInput>
    /**
     * Filter which EmailJobs to update
     */
    where?: EmailJobWhereInput
    /**
     * Limit how many EmailJobs to update.
     */
    limit?: number
  }

  /**
   * EmailJob updateManyAndReturn
   */
  export type EmailJobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * The data used to update EmailJobs.
     */
    data: XOR<EmailJobUpdateManyMutationInput, EmailJobUncheckedUpdateManyInput>
    /**
     * Filter which EmailJobs to update
     */
    where?: EmailJobWhereInput
    /**
     * Limit how many EmailJobs to update.
     */
    limit?: number
  }

  /**
   * EmailJob upsert
   */
  export type EmailJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailJob to update in case it exists.
     */
    where: EmailJobWhereUniqueInput
    /**
     * In case the EmailJob found by the `where` argument doesn't exist, create a new EmailJob with this data.
     */
    create: XOR<EmailJobCreateInput, EmailJobUncheckedCreateInput>
    /**
     * In case the EmailJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailJobUpdateInput, EmailJobUncheckedUpdateInput>
  }

  /**
   * EmailJob delete
   */
  export type EmailJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
    /**
     * Filter which EmailJob to delete.
     */
    where: EmailJobWhereUniqueInput
  }

  /**
   * EmailJob deleteMany
   */
  export type EmailJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailJobs to delete
     */
    where?: EmailJobWhereInput
    /**
     * Limit how many EmailJobs to delete.
     */
    limit?: number
  }

  /**
   * EmailJob without action
   */
  export type EmailJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailJob
     */
    select?: EmailJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailJob
     */
    omit?: EmailJobOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    supabaseId: 'supabaseId',
    avatarUrl: 'avatarUrl',
    locale: 'locale',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserApiKeyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    provider: 'provider',
    encryptedKey: 'encryptedKey',
    iv: 'iv',
    authTag: 'authTag',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserApiKeyScalarFieldEnum = (typeof UserApiKeyScalarFieldEnum)[keyof typeof UserApiKeyScalarFieldEnum]


  export const PromptScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    rawInput: 'rawInput',
    optimizedText: 'optimizedText',
    taskType: 'taskType',
    tone: 'tone',
    format: 'format',
    targetLlm: 'targetLlm',
    tags: 'tags',
    isPublic: 'isPublic',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum]


  export const EvaluationScalarFieldEnum: {
    id: 'id',
    promptId: 'promptId',
    userId: 'userId',
    promptText: 'promptText',
    structureScore: 'structureScore',
    clarityScore: 'clarityScore',
    completenessScore: 'completenessScore',
    specificityScore: 'specificityScore',
    overallScore: 'overallScore',
    feedback: 'feedback',
    suggestions: 'suggestions',
    provider: 'provider',
    model: 'model',
    createdAt: 'createdAt'
  };

  export type EvaluationScalarFieldEnum = (typeof EvaluationScalarFieldEnum)[keyof typeof EvaluationScalarFieldEnum]


  export const PromptTemplateScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    category: 'category',
    template: 'template',
    variables: 'variables',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PromptTemplateScalarFieldEnum = (typeof PromptTemplateScalarFieldEnum)[keyof typeof PromptTemplateScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tier: 'tier',
    status: 'status',
    billingInterval: 'billingInterval',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    trialEndsAt: 'trialEndsAt',
    canceledAt: 'canceledAt',
    gatewayCustomerId: 'gatewayCustomerId',
    gatewaySubscriptionId: 'gatewaySubscriptionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    method: 'method',
    gatewayPaymentId: 'gatewayPaymentId',
    gatewayResponse: 'gatewayResponse',
    invoiceNumber: 'invoiceNumber',
    paidAt: 'paidAt',
    failedAt: 'failedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const UsageRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    count: 'count',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type UsageRecordScalarFieldEnum = (typeof UsageRecordScalarFieldEnum)[keyof typeof UsageRecordScalarFieldEnum]


  export const FeatureFlagScalarFieldEnum: {
    id: 'id',
    key: 'key',
    name: 'name',
    description: 'description',
    enabledFor: 'enabledFor',
    isGlobal: 'isGlobal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeatureFlagScalarFieldEnum = (typeof FeatureFlagScalarFieldEnum)[keyof typeof FeatureFlagScalarFieldEnum]


  export const RateLimitCounterScalarFieldEnum: {
    id: 'id',
    action: 'action',
    scope: 'scope',
    keyHash: 'keyHash',
    windowStart: 'windowStart',
    windowEnd: 'windowEnd',
    count: 'count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RateLimitCounterScalarFieldEnum = (typeof RateLimitCounterScalarFieldEnum)[keyof typeof RateLimitCounterScalarFieldEnum]


  export const EmailJobScalarFieldEnum: {
    id: 'id',
    type: 'type',
    toEmail: 'toEmail',
    payload: 'payload',
    status: 'status',
    attempts: 'attempts',
    maxAttempts: 'maxAttempts',
    nextAttemptAt: 'nextAttemptAt',
    lastAttemptAt: 'lastAttemptAt',
    sentAt: 'sentAt',
    lastError: 'lastError',
    idempotencyKey: 'idempotencyKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EmailJobScalarFieldEnum = (typeof EmailJobScalarFieldEnum)[keyof typeof EmailJobScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LLMProvider'
   */
  export type EnumLLMProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LLMProvider'>
    


  /**
   * Reference to a field of type 'LLMProvider[]'
   */
  export type ListEnumLLMProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LLMProvider[]'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'PromptTone'
   */
  export type EnumPromptToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromptTone'>
    


  /**
   * Reference to a field of type 'PromptTone[]'
   */
  export type ListEnumPromptToneFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromptTone[]'>
    


  /**
   * Reference to a field of type 'OutputFormat'
   */
  export type EnumOutputFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputFormat'>
    


  /**
   * Reference to a field of type 'OutputFormat[]'
   */
  export type ListEnumOutputFormatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OutputFormat[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'TemplateCategory'
   */
  export type EnumTemplateCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateCategory'>
    


  /**
   * Reference to a field of type 'TemplateCategory[]'
   */
  export type ListEnumTemplateCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TemplateCategory[]'>
    


  /**
   * Reference to a field of type 'SubscriptionTier'
   */
  export type EnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier'>
    


  /**
   * Reference to a field of type 'SubscriptionTier[]'
   */
  export type ListEnumSubscriptionTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionTier[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'BillingInterval'
   */
  export type EnumBillingIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingInterval'>
    


  /**
   * Reference to a field of type 'BillingInterval[]'
   */
  export type ListEnumBillingIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillingInterval[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'UsageType'
   */
  export type EnumUsageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsageType'>
    


  /**
   * Reference to a field of type 'UsageType[]'
   */
  export type ListEnumUsageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsageType[]'>
    


  /**
   * Reference to a field of type 'RateLimitScope'
   */
  export type EnumRateLimitScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RateLimitScope'>
    


  /**
   * Reference to a field of type 'RateLimitScope[]'
   */
  export type ListEnumRateLimitScopeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RateLimitScope[]'>
    


  /**
   * Reference to a field of type 'EmailJobType'
   */
  export type EnumEmailJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailJobType'>
    


  /**
   * Reference to a field of type 'EmailJobType[]'
   */
  export type ListEnumEmailJobTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailJobType[]'>
    


  /**
   * Reference to a field of type 'EmailJobStatus'
   */
  export type EnumEmailJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailJobStatus'>
    


  /**
   * Reference to a field of type 'EmailJobStatus[]'
   */
  export type ListEnumEmailJobStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmailJobStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    supabaseId?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    locale?: StringFilter<"User"> | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    prompts?: PromptListRelationFilter
    evaluations?: EvaluationListRelationFilter
    apiKeys?: UserApiKeyListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    usageRecords?: UsageRecordListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    supabaseId?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    locale?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    prompts?: PromptOrderByRelationAggregateInput
    evaluations?: EvaluationOrderByRelationAggregateInput
    apiKeys?: UserApiKeyOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
    usageRecords?: UsageRecordOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    supabaseId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    locale?: StringFilter<"User"> | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    prompts?: PromptListRelationFilter
    evaluations?: EvaluationListRelationFilter
    apiKeys?: UserApiKeyListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    usageRecords?: UsageRecordListRelationFilter
  }, "id" | "email" | "supabaseId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    supabaseId?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    locale?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    supabaseId?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    locale?: StringWithAggregatesFilter<"User"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserApiKeyWhereInput = {
    AND?: UserApiKeyWhereInput | UserApiKeyWhereInput[]
    OR?: UserApiKeyWhereInput[]
    NOT?: UserApiKeyWhereInput | UserApiKeyWhereInput[]
    id?: StringFilter<"UserApiKey"> | string
    userId?: StringFilter<"UserApiKey"> | string
    provider?: EnumLLMProviderFilter<"UserApiKey"> | $Enums.LLMProvider
    encryptedKey?: StringFilter<"UserApiKey"> | string
    iv?: StringFilter<"UserApiKey"> | string
    authTag?: StringFilter<"UserApiKey"> | string
    createdAt?: DateTimeFilter<"UserApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"UserApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_provider?: UserApiKeyUserIdProviderCompoundUniqueInput
    AND?: UserApiKeyWhereInput | UserApiKeyWhereInput[]
    OR?: UserApiKeyWhereInput[]
    NOT?: UserApiKeyWhereInput | UserApiKeyWhereInput[]
    userId?: StringFilter<"UserApiKey"> | string
    provider?: EnumLLMProviderFilter<"UserApiKey"> | $Enums.LLMProvider
    encryptedKey?: StringFilter<"UserApiKey"> | string
    iv?: StringFilter<"UserApiKey"> | string
    authTag?: StringFilter<"UserApiKey"> | string
    createdAt?: DateTimeFilter<"UserApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"UserApiKey"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_provider">

  export type UserApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserApiKeyCountOrderByAggregateInput
    _max?: UserApiKeyMaxOrderByAggregateInput
    _min?: UserApiKeyMinOrderByAggregateInput
  }

  export type UserApiKeyScalarWhereWithAggregatesInput = {
    AND?: UserApiKeyScalarWhereWithAggregatesInput | UserApiKeyScalarWhereWithAggregatesInput[]
    OR?: UserApiKeyScalarWhereWithAggregatesInput[]
    NOT?: UserApiKeyScalarWhereWithAggregatesInput | UserApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserApiKey"> | string
    userId?: StringWithAggregatesFilter<"UserApiKey"> | string
    provider?: EnumLLMProviderWithAggregatesFilter<"UserApiKey"> | $Enums.LLMProvider
    encryptedKey?: StringWithAggregatesFilter<"UserApiKey"> | string
    iv?: StringWithAggregatesFilter<"UserApiKey"> | string
    authTag?: StringWithAggregatesFilter<"UserApiKey"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserApiKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserApiKey"> | Date | string
  }

  export type PromptWhereInput = {
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    id?: StringFilter<"Prompt"> | string
    userId?: StringFilter<"Prompt"> | string
    rawInput?: StringFilter<"Prompt"> | string
    optimizedText?: StringFilter<"Prompt"> | string
    taskType?: EnumTaskTypeFilter<"Prompt"> | $Enums.TaskType
    tone?: EnumPromptToneFilter<"Prompt"> | $Enums.PromptTone
    format?: EnumOutputFormatFilter<"Prompt"> | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFilter<"Prompt"> | $Enums.LLMProvider
    tags?: StringNullableListFilter<"Prompt">
    isPublic?: BoolFilter<"Prompt"> | boolean
    deletedAt?: DateTimeNullableFilter<"Prompt"> | Date | string | null
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    evaluations?: EvaluationListRelationFilter
  }

  export type PromptOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    rawInput?: SortOrder
    optimizedText?: SortOrder
    taskType?: SortOrder
    tone?: SortOrder
    format?: SortOrder
    targetLlm?: SortOrder
    tags?: SortOrder
    isPublic?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    evaluations?: EvaluationOrderByRelationAggregateInput
  }

  export type PromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    userId?: StringFilter<"Prompt"> | string
    rawInput?: StringFilter<"Prompt"> | string
    optimizedText?: StringFilter<"Prompt"> | string
    taskType?: EnumTaskTypeFilter<"Prompt"> | $Enums.TaskType
    tone?: EnumPromptToneFilter<"Prompt"> | $Enums.PromptTone
    format?: EnumOutputFormatFilter<"Prompt"> | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFilter<"Prompt"> | $Enums.LLMProvider
    tags?: StringNullableListFilter<"Prompt">
    isPublic?: BoolFilter<"Prompt"> | boolean
    deletedAt?: DateTimeNullableFilter<"Prompt"> | Date | string | null
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    evaluations?: EvaluationListRelationFilter
  }, "id">

  export type PromptOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    rawInput?: SortOrder
    optimizedText?: SortOrder
    taskType?: SortOrder
    tone?: SortOrder
    format?: SortOrder
    targetLlm?: SortOrder
    tags?: SortOrder
    isPublic?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptCountOrderByAggregateInput
    _max?: PromptMaxOrderByAggregateInput
    _min?: PromptMinOrderByAggregateInput
  }

  export type PromptScalarWhereWithAggregatesInput = {
    AND?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    OR?: PromptScalarWhereWithAggregatesInput[]
    NOT?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prompt"> | string
    userId?: StringWithAggregatesFilter<"Prompt"> | string
    rawInput?: StringWithAggregatesFilter<"Prompt"> | string
    optimizedText?: StringWithAggregatesFilter<"Prompt"> | string
    taskType?: EnumTaskTypeWithAggregatesFilter<"Prompt"> | $Enums.TaskType
    tone?: EnumPromptToneWithAggregatesFilter<"Prompt"> | $Enums.PromptTone
    format?: EnumOutputFormatWithAggregatesFilter<"Prompt"> | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderWithAggregatesFilter<"Prompt"> | $Enums.LLMProvider
    tags?: StringNullableListFilter<"Prompt">
    isPublic?: BoolWithAggregatesFilter<"Prompt"> | boolean
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Prompt"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
  }

  export type EvaluationWhereInput = {
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    id?: StringFilter<"Evaluation"> | string
    promptId?: StringNullableFilter<"Evaluation"> | string | null
    userId?: StringFilter<"Evaluation"> | string
    promptText?: StringFilter<"Evaluation"> | string
    structureScore?: FloatFilter<"Evaluation"> | number
    clarityScore?: FloatFilter<"Evaluation"> | number
    completenessScore?: FloatFilter<"Evaluation"> | number
    specificityScore?: FloatFilter<"Evaluation"> | number
    overallScore?: FloatFilter<"Evaluation"> | number
    feedback?: JsonFilter<"Evaluation">
    suggestions?: StringNullableListFilter<"Evaluation">
    provider?: EnumLLMProviderFilter<"Evaluation"> | $Enums.LLMProvider
    model?: StringFilter<"Evaluation"> | string
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    prompt?: XOR<PromptNullableScalarRelationFilter, PromptWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EvaluationOrderByWithRelationInput = {
    id?: SortOrder
    promptId?: SortOrderInput | SortOrder
    userId?: SortOrder
    promptText?: SortOrder
    structureScore?: SortOrder
    clarityScore?: SortOrder
    completenessScore?: SortOrder
    specificityScore?: SortOrder
    overallScore?: SortOrder
    feedback?: SortOrder
    suggestions?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    prompt?: PromptOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EvaluationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EvaluationWhereInput | EvaluationWhereInput[]
    OR?: EvaluationWhereInput[]
    NOT?: EvaluationWhereInput | EvaluationWhereInput[]
    promptId?: StringNullableFilter<"Evaluation"> | string | null
    userId?: StringFilter<"Evaluation"> | string
    promptText?: StringFilter<"Evaluation"> | string
    structureScore?: FloatFilter<"Evaluation"> | number
    clarityScore?: FloatFilter<"Evaluation"> | number
    completenessScore?: FloatFilter<"Evaluation"> | number
    specificityScore?: FloatFilter<"Evaluation"> | number
    overallScore?: FloatFilter<"Evaluation"> | number
    feedback?: JsonFilter<"Evaluation">
    suggestions?: StringNullableListFilter<"Evaluation">
    provider?: EnumLLMProviderFilter<"Evaluation"> | $Enums.LLMProvider
    model?: StringFilter<"Evaluation"> | string
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
    prompt?: XOR<PromptNullableScalarRelationFilter, PromptWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EvaluationOrderByWithAggregationInput = {
    id?: SortOrder
    promptId?: SortOrderInput | SortOrder
    userId?: SortOrder
    promptText?: SortOrder
    structureScore?: SortOrder
    clarityScore?: SortOrder
    completenessScore?: SortOrder
    specificityScore?: SortOrder
    overallScore?: SortOrder
    feedback?: SortOrder
    suggestions?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    _count?: EvaluationCountOrderByAggregateInput
    _avg?: EvaluationAvgOrderByAggregateInput
    _max?: EvaluationMaxOrderByAggregateInput
    _min?: EvaluationMinOrderByAggregateInput
    _sum?: EvaluationSumOrderByAggregateInput
  }

  export type EvaluationScalarWhereWithAggregatesInput = {
    AND?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    OR?: EvaluationScalarWhereWithAggregatesInput[]
    NOT?: EvaluationScalarWhereWithAggregatesInput | EvaluationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Evaluation"> | string
    promptId?: StringNullableWithAggregatesFilter<"Evaluation"> | string | null
    userId?: StringWithAggregatesFilter<"Evaluation"> | string
    promptText?: StringWithAggregatesFilter<"Evaluation"> | string
    structureScore?: FloatWithAggregatesFilter<"Evaluation"> | number
    clarityScore?: FloatWithAggregatesFilter<"Evaluation"> | number
    completenessScore?: FloatWithAggregatesFilter<"Evaluation"> | number
    specificityScore?: FloatWithAggregatesFilter<"Evaluation"> | number
    overallScore?: FloatWithAggregatesFilter<"Evaluation"> | number
    feedback?: JsonWithAggregatesFilter<"Evaluation">
    suggestions?: StringNullableListFilter<"Evaluation">
    provider?: EnumLLMProviderWithAggregatesFilter<"Evaluation"> | $Enums.LLMProvider
    model?: StringWithAggregatesFilter<"Evaluation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Evaluation"> | Date | string
  }

  export type PromptTemplateWhereInput = {
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    id?: StringFilter<"PromptTemplate"> | string
    slug?: StringFilter<"PromptTemplate"> | string
    name?: StringFilter<"PromptTemplate"> | string
    description?: StringFilter<"PromptTemplate"> | string
    category?: EnumTemplateCategoryFilter<"PromptTemplate"> | $Enums.TemplateCategory
    template?: JsonFilter<"PromptTemplate">
    variables?: JsonFilter<"PromptTemplate">
    isActive?: BoolFilter<"PromptTemplate"> | boolean
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PromptTemplate"> | Date | string
  }

  export type PromptTemplateOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    template?: SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    OR?: PromptTemplateWhereInput[]
    NOT?: PromptTemplateWhereInput | PromptTemplateWhereInput[]
    name?: StringFilter<"PromptTemplate"> | string
    description?: StringFilter<"PromptTemplate"> | string
    category?: EnumTemplateCategoryFilter<"PromptTemplate"> | $Enums.TemplateCategory
    template?: JsonFilter<"PromptTemplate">
    variables?: JsonFilter<"PromptTemplate">
    isActive?: BoolFilter<"PromptTemplate"> | boolean
    createdAt?: DateTimeFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"PromptTemplate"> | Date | string
  }, "id" | "slug">

  export type PromptTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    template?: SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PromptTemplateCountOrderByAggregateInput
    _max?: PromptTemplateMaxOrderByAggregateInput
    _min?: PromptTemplateMinOrderByAggregateInput
  }

  export type PromptTemplateScalarWhereWithAggregatesInput = {
    AND?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    OR?: PromptTemplateScalarWhereWithAggregatesInput[]
    NOT?: PromptTemplateScalarWhereWithAggregatesInput | PromptTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromptTemplate"> | string
    slug?: StringWithAggregatesFilter<"PromptTemplate"> | string
    name?: StringWithAggregatesFilter<"PromptTemplate"> | string
    description?: StringWithAggregatesFilter<"PromptTemplate"> | string
    category?: EnumTemplateCategoryWithAggregatesFilter<"PromptTemplate"> | $Enums.TemplateCategory
    template?: JsonWithAggregatesFilter<"PromptTemplate">
    variables?: JsonWithAggregatesFilter<"PromptTemplate">
    isActive?: BoolWithAggregatesFilter<"PromptTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PromptTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PromptTemplate"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    tier?: EnumSubscriptionTierFilter<"Subscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    billingInterval?: EnumBillingIntervalNullableFilter<"Subscription"> | $Enums.BillingInterval | null
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEndsAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    gatewayCustomerId?: StringNullableFilter<"Subscription"> | string | null
    gatewaySubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    billingInterval?: SortOrderInput | SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    gatewayCustomerId?: SortOrderInput | SortOrder
    gatewaySubscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    tier?: EnumSubscriptionTierFilter<"Subscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    billingInterval?: EnumBillingIntervalNullableFilter<"Subscription"> | $Enums.BillingInterval | null
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    trialEndsAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    gatewayCustomerId?: StringNullableFilter<"Subscription"> | string | null
    gatewaySubscriptionId?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payments?: PaymentListRelationFilter
  }, "id" | "userId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    billingInterval?: SortOrderInput | SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    trialEndsAt?: SortOrderInput | SortOrder
    canceledAt?: SortOrderInput | SortOrder
    gatewayCustomerId?: SortOrderInput | SortOrder
    gatewaySubscriptionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    tier?: EnumSubscriptionTierWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    billingInterval?: EnumBillingIntervalNullableWithAggregatesFilter<"Subscription"> | $Enums.BillingInterval | null
    currentPeriodStart?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    trialEndsAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    gatewayCustomerId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    gatewaySubscriptionId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    subscriptionId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    invoiceNumber?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gatewayPaymentId?: string
    invoiceNumber?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    subscriptionId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    subscription?: XOR<SubscriptionScalarRelationFilter, SubscriptionWhereInput>
  }, "id" | "gatewayPaymentId" | "invoiceNumber">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    failedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    subscriptionId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodNullableWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod | null
    gatewayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableWithAggregatesFilter<"Payment">
    invoiceNumber?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UsageRecordWhereInput = {
    AND?: UsageRecordWhereInput | UsageRecordWhereInput[]
    OR?: UsageRecordWhereInput[]
    NOT?: UsageRecordWhereInput | UsageRecordWhereInput[]
    id?: StringFilter<"UsageRecord"> | string
    userId?: StringFilter<"UsageRecord"> | string
    type?: EnumUsageTypeFilter<"UsageRecord"> | $Enums.UsageType
    count?: IntFilter<"UsageRecord"> | number
    date?: DateTimeFilter<"UsageRecord"> | Date | string
    createdAt?: DateTimeFilter<"UsageRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UsageRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    count?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UsageRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_type_date?: UsageRecordUserIdTypeDateCompoundUniqueInput
    AND?: UsageRecordWhereInput | UsageRecordWhereInput[]
    OR?: UsageRecordWhereInput[]
    NOT?: UsageRecordWhereInput | UsageRecordWhereInput[]
    userId?: StringFilter<"UsageRecord"> | string
    type?: EnumUsageTypeFilter<"UsageRecord"> | $Enums.UsageType
    count?: IntFilter<"UsageRecord"> | number
    date?: DateTimeFilter<"UsageRecord"> | Date | string
    createdAt?: DateTimeFilter<"UsageRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_type_date">

  export type UsageRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    count?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: UsageRecordCountOrderByAggregateInput
    _avg?: UsageRecordAvgOrderByAggregateInput
    _max?: UsageRecordMaxOrderByAggregateInput
    _min?: UsageRecordMinOrderByAggregateInput
    _sum?: UsageRecordSumOrderByAggregateInput
  }

  export type UsageRecordScalarWhereWithAggregatesInput = {
    AND?: UsageRecordScalarWhereWithAggregatesInput | UsageRecordScalarWhereWithAggregatesInput[]
    OR?: UsageRecordScalarWhereWithAggregatesInput[]
    NOT?: UsageRecordScalarWhereWithAggregatesInput | UsageRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageRecord"> | string
    userId?: StringWithAggregatesFilter<"UsageRecord"> | string
    type?: EnumUsageTypeWithAggregatesFilter<"UsageRecord"> | $Enums.UsageType
    count?: IntWithAggregatesFilter<"UsageRecord"> | number
    date?: DateTimeWithAggregatesFilter<"UsageRecord"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UsageRecord"> | Date | string
  }

  export type FeatureFlagWhereInput = {
    AND?: FeatureFlagWhereInput | FeatureFlagWhereInput[]
    OR?: FeatureFlagWhereInput[]
    NOT?: FeatureFlagWhereInput | FeatureFlagWhereInput[]
    id?: StringFilter<"FeatureFlag"> | string
    key?: StringFilter<"FeatureFlag"> | string
    name?: StringFilter<"FeatureFlag"> | string
    description?: StringNullableFilter<"FeatureFlag"> | string | null
    enabledFor?: EnumSubscriptionTierNullableListFilter<"FeatureFlag">
    isGlobal?: BoolFilter<"FeatureFlag"> | boolean
    createdAt?: DateTimeFilter<"FeatureFlag"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureFlag"> | Date | string
  }

  export type FeatureFlagOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    enabledFor?: SortOrder
    isGlobal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureFlagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: FeatureFlagWhereInput | FeatureFlagWhereInput[]
    OR?: FeatureFlagWhereInput[]
    NOT?: FeatureFlagWhereInput | FeatureFlagWhereInput[]
    name?: StringFilter<"FeatureFlag"> | string
    description?: StringNullableFilter<"FeatureFlag"> | string | null
    enabledFor?: EnumSubscriptionTierNullableListFilter<"FeatureFlag">
    isGlobal?: BoolFilter<"FeatureFlag"> | boolean
    createdAt?: DateTimeFilter<"FeatureFlag"> | Date | string
    updatedAt?: DateTimeFilter<"FeatureFlag"> | Date | string
  }, "id" | "key">

  export type FeatureFlagOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    enabledFor?: SortOrder
    isGlobal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FeatureFlagCountOrderByAggregateInput
    _max?: FeatureFlagMaxOrderByAggregateInput
    _min?: FeatureFlagMinOrderByAggregateInput
  }

  export type FeatureFlagScalarWhereWithAggregatesInput = {
    AND?: FeatureFlagScalarWhereWithAggregatesInput | FeatureFlagScalarWhereWithAggregatesInput[]
    OR?: FeatureFlagScalarWhereWithAggregatesInput[]
    NOT?: FeatureFlagScalarWhereWithAggregatesInput | FeatureFlagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FeatureFlag"> | string
    key?: StringWithAggregatesFilter<"FeatureFlag"> | string
    name?: StringWithAggregatesFilter<"FeatureFlag"> | string
    description?: StringNullableWithAggregatesFilter<"FeatureFlag"> | string | null
    enabledFor?: EnumSubscriptionTierNullableListFilter<"FeatureFlag">
    isGlobal?: BoolWithAggregatesFilter<"FeatureFlag"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FeatureFlag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FeatureFlag"> | Date | string
  }

  export type RateLimitCounterWhereInput = {
    AND?: RateLimitCounterWhereInput | RateLimitCounterWhereInput[]
    OR?: RateLimitCounterWhereInput[]
    NOT?: RateLimitCounterWhereInput | RateLimitCounterWhereInput[]
    id?: StringFilter<"RateLimitCounter"> | string
    action?: StringFilter<"RateLimitCounter"> | string
    scope?: EnumRateLimitScopeFilter<"RateLimitCounter"> | $Enums.RateLimitScope
    keyHash?: StringFilter<"RateLimitCounter"> | string
    windowStart?: DateTimeFilter<"RateLimitCounter"> | Date | string
    windowEnd?: DateTimeFilter<"RateLimitCounter"> | Date | string
    count?: IntFilter<"RateLimitCounter"> | number
    createdAt?: DateTimeFilter<"RateLimitCounter"> | Date | string
    updatedAt?: DateTimeFilter<"RateLimitCounter"> | Date | string
  }

  export type RateLimitCounterOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    scope?: SortOrder
    keyHash?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RateLimitCounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    action_scope_keyHash_windowStart?: RateLimitCounterActionScopeKeyHashWindowStartCompoundUniqueInput
    AND?: RateLimitCounterWhereInput | RateLimitCounterWhereInput[]
    OR?: RateLimitCounterWhereInput[]
    NOT?: RateLimitCounterWhereInput | RateLimitCounterWhereInput[]
    action?: StringFilter<"RateLimitCounter"> | string
    scope?: EnumRateLimitScopeFilter<"RateLimitCounter"> | $Enums.RateLimitScope
    keyHash?: StringFilter<"RateLimitCounter"> | string
    windowStart?: DateTimeFilter<"RateLimitCounter"> | Date | string
    windowEnd?: DateTimeFilter<"RateLimitCounter"> | Date | string
    count?: IntFilter<"RateLimitCounter"> | number
    createdAt?: DateTimeFilter<"RateLimitCounter"> | Date | string
    updatedAt?: DateTimeFilter<"RateLimitCounter"> | Date | string
  }, "id" | "action_scope_keyHash_windowStart">

  export type RateLimitCounterOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    scope?: SortOrder
    keyHash?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RateLimitCounterCountOrderByAggregateInput
    _avg?: RateLimitCounterAvgOrderByAggregateInput
    _max?: RateLimitCounterMaxOrderByAggregateInput
    _min?: RateLimitCounterMinOrderByAggregateInput
    _sum?: RateLimitCounterSumOrderByAggregateInput
  }

  export type RateLimitCounterScalarWhereWithAggregatesInput = {
    AND?: RateLimitCounterScalarWhereWithAggregatesInput | RateLimitCounterScalarWhereWithAggregatesInput[]
    OR?: RateLimitCounterScalarWhereWithAggregatesInput[]
    NOT?: RateLimitCounterScalarWhereWithAggregatesInput | RateLimitCounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RateLimitCounter"> | string
    action?: StringWithAggregatesFilter<"RateLimitCounter"> | string
    scope?: EnumRateLimitScopeWithAggregatesFilter<"RateLimitCounter"> | $Enums.RateLimitScope
    keyHash?: StringWithAggregatesFilter<"RateLimitCounter"> | string
    windowStart?: DateTimeWithAggregatesFilter<"RateLimitCounter"> | Date | string
    windowEnd?: DateTimeWithAggregatesFilter<"RateLimitCounter"> | Date | string
    count?: IntWithAggregatesFilter<"RateLimitCounter"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RateLimitCounter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RateLimitCounter"> | Date | string
  }

  export type EmailJobWhereInput = {
    AND?: EmailJobWhereInput | EmailJobWhereInput[]
    OR?: EmailJobWhereInput[]
    NOT?: EmailJobWhereInput | EmailJobWhereInput[]
    id?: StringFilter<"EmailJob"> | string
    type?: EnumEmailJobTypeFilter<"EmailJob"> | $Enums.EmailJobType
    toEmail?: StringFilter<"EmailJob"> | string
    payload?: JsonFilter<"EmailJob">
    status?: EnumEmailJobStatusFilter<"EmailJob"> | $Enums.EmailJobStatus
    attempts?: IntFilter<"EmailJob"> | number
    maxAttempts?: IntFilter<"EmailJob"> | number
    nextAttemptAt?: DateTimeFilter<"EmailJob"> | Date | string
    lastAttemptAt?: DateTimeNullableFilter<"EmailJob"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"EmailJob"> | Date | string | null
    lastError?: StringNullableFilter<"EmailJob"> | string | null
    idempotencyKey?: StringNullableFilter<"EmailJob"> | string | null
    createdAt?: DateTimeFilter<"EmailJob"> | Date | string
    updatedAt?: DateTimeFilter<"EmailJob"> | Date | string
  }

  export type EmailJobOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    toEmail?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrder
    lastAttemptAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idempotencyKey?: string
    AND?: EmailJobWhereInput | EmailJobWhereInput[]
    OR?: EmailJobWhereInput[]
    NOT?: EmailJobWhereInput | EmailJobWhereInput[]
    type?: EnumEmailJobTypeFilter<"EmailJob"> | $Enums.EmailJobType
    toEmail?: StringFilter<"EmailJob"> | string
    payload?: JsonFilter<"EmailJob">
    status?: EnumEmailJobStatusFilter<"EmailJob"> | $Enums.EmailJobStatus
    attempts?: IntFilter<"EmailJob"> | number
    maxAttempts?: IntFilter<"EmailJob"> | number
    nextAttemptAt?: DateTimeFilter<"EmailJob"> | Date | string
    lastAttemptAt?: DateTimeNullableFilter<"EmailJob"> | Date | string | null
    sentAt?: DateTimeNullableFilter<"EmailJob"> | Date | string | null
    lastError?: StringNullableFilter<"EmailJob"> | string | null
    createdAt?: DateTimeFilter<"EmailJob"> | Date | string
    updatedAt?: DateTimeFilter<"EmailJob"> | Date | string
  }, "id" | "idempotencyKey">

  export type EmailJobOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    toEmail?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrder
    lastAttemptAt?: SortOrderInput | SortOrder
    sentAt?: SortOrderInput | SortOrder
    lastError?: SortOrderInput | SortOrder
    idempotencyKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EmailJobCountOrderByAggregateInput
    _avg?: EmailJobAvgOrderByAggregateInput
    _max?: EmailJobMaxOrderByAggregateInput
    _min?: EmailJobMinOrderByAggregateInput
    _sum?: EmailJobSumOrderByAggregateInput
  }

  export type EmailJobScalarWhereWithAggregatesInput = {
    AND?: EmailJobScalarWhereWithAggregatesInput | EmailJobScalarWhereWithAggregatesInput[]
    OR?: EmailJobScalarWhereWithAggregatesInput[]
    NOT?: EmailJobScalarWhereWithAggregatesInput | EmailJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailJob"> | string
    type?: EnumEmailJobTypeWithAggregatesFilter<"EmailJob"> | $Enums.EmailJobType
    toEmail?: StringWithAggregatesFilter<"EmailJob"> | string
    payload?: JsonWithAggregatesFilter<"EmailJob">
    status?: EnumEmailJobStatusWithAggregatesFilter<"EmailJob"> | $Enums.EmailJobStatus
    attempts?: IntWithAggregatesFilter<"EmailJob"> | number
    maxAttempts?: IntWithAggregatesFilter<"EmailJob"> | number
    nextAttemptAt?: DateTimeWithAggregatesFilter<"EmailJob"> | Date | string
    lastAttemptAt?: DateTimeNullableWithAggregatesFilter<"EmailJob"> | Date | string | null
    sentAt?: DateTimeNullableWithAggregatesFilter<"EmailJob"> | Date | string | null
    lastError?: StringNullableWithAggregatesFilter<"EmailJob"> | string | null
    idempotencyKey?: StringNullableWithAggregatesFilter<"EmailJob"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EmailJob"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EmailJob"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    usageRecords?: UsageRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    usageRecords?: UsageRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    usageRecords?: UsageRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    usageRecords?: UsageRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiKeyCreateInput = {
    id?: string
    provider: $Enums.LLMProvider
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutApiKeysInput
  }

  export type UserApiKeyUncheckedCreateInput = {
    id?: string
    userId: string
    provider: $Enums.LLMProvider
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type UserApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiKeyCreateManyInput = {
    id?: string
    userId: string
    provider: $Enums.LLMProvider
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptCreateInput = {
    id?: string
    rawInput: string
    optimizedText: string
    taskType: $Enums.TaskType
    tone: $Enums.PromptTone
    format: $Enums.OutputFormat
    targetLlm: $Enums.LLMProvider
    tags?: PromptCreatetagsInput | string[]
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
    evaluations?: EvaluationCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateInput = {
    id?: string
    userId: string
    rawInput: string
    optimizedText: string
    taskType: $Enums.TaskType
    tone: $Enums.PromptTone
    format: $Enums.OutputFormat
    targetLlm: $Enums.LLMProvider
    tags?: PromptCreatetagsInput | string[]
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawInput?: StringFieldUpdateOperationsInput | string
    optimizedText?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    tone?: EnumPromptToneFieldUpdateOperationsInput | $Enums.PromptTone
    format?: EnumOutputFormatFieldUpdateOperationsInput | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    tags?: PromptUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
    evaluations?: EvaluationUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rawInput?: StringFieldUpdateOperationsInput | string
    optimizedText?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    tone?: EnumPromptToneFieldUpdateOperationsInput | $Enums.PromptTone
    format?: EnumOutputFormatFieldUpdateOperationsInput | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    tags?: PromptUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type PromptCreateManyInput = {
    id?: string
    userId: string
    rawInput: string
    optimizedText: string
    taskType: $Enums.TaskType
    tone: $Enums.PromptTone
    format: $Enums.OutputFormat
    targetLlm: $Enums.LLMProvider
    tags?: PromptCreatetagsInput | string[]
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawInput?: StringFieldUpdateOperationsInput | string
    optimizedText?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    tone?: EnumPromptToneFieldUpdateOperationsInput | $Enums.PromptTone
    format?: EnumOutputFormatFieldUpdateOperationsInput | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    tags?: PromptUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rawInput?: StringFieldUpdateOperationsInput | string
    optimizedText?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    tone?: EnumPromptToneFieldUpdateOperationsInput | $Enums.PromptTone
    format?: EnumOutputFormatFieldUpdateOperationsInput | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    tags?: PromptUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateInput = {
    id?: string
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationCreatesuggestionsInput | string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt?: Date | string
    prompt?: PromptCreateNestedOneWithoutEvaluationsInput
    user: UserCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateInput = {
    id?: string
    promptId?: string | null
    userId: string
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationCreatesuggestionsInput | string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt?: Date | string
  }

  export type EvaluationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneWithoutEvaluationsNestedInput
    user?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateManyInput = {
    id?: string
    promptId?: string | null
    userId: string
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationCreatesuggestionsInput | string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt?: Date | string
  }

  export type EvaluationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateCreateInput = {
    id?: string
    slug: string
    name: string
    description: string
    category: $Enums.TemplateCategory
    template: JsonNullValueInput | InputJsonValue
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    description: string
    category: $Enums.TemplateCategory
    template: JsonNullValueInput | InputJsonValue
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory
    template?: JsonNullValueInput | InputJsonValue
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory
    template?: JsonNullValueInput | InputJsonValue
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateCreateManyInput = {
    id?: string
    slug: string
    name: string
    description: string
    category: $Enums.TemplateCategory
    template: JsonNullValueInput | InputJsonValue
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory
    template?: JsonNullValueInput | InputJsonValue
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumTemplateCategoryFieldUpdateOperationsInput | $Enums.TemplateCategory
    template?: JsonNullValueInput | InputJsonValue
    variables?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    billingInterval?: $Enums.BillingInterval | null
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    trialEndsAt?: Date | string | null
    canceledAt?: Date | string | null
    gatewayCustomerId?: string | null
    gatewaySubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    billingInterval?: $Enums.BillingInterval | null
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    trialEndsAt?: Date | string | null
    canceledAt?: Date | string | null
    gatewayCustomerId?: string | null
    gatewaySubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    billingInterval?: NullableEnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval | null
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatewayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    billingInterval?: NullableEnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval | null
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatewayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    billingInterval?: $Enums.BillingInterval | null
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    trialEndsAt?: Date | string | null
    canceledAt?: Date | string | null
    gatewayCustomerId?: string | null
    gatewaySubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    billingInterval?: NullableEnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval | null
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatewayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    billingInterval?: NullableEnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval | null
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatewayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    subscription: SubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    subscriptionId: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    subscriptionId: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageRecordCreateInput = {
    id?: string
    type: $Enums.UsageType
    count?: number
    date?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUsageRecordsInput
  }

  export type UsageRecordUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.UsageType
    count?: number
    date?: Date | string
    createdAt?: Date | string
  }

  export type UsageRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType
    count?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUsageRecordsNestedInput
  }

  export type UsageRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType
    count?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageRecordCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.UsageType
    count?: number
    date?: Date | string
    createdAt?: Date | string
  }

  export type UsageRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType
    count?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType
    count?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureFlagCreateInput = {
    id?: string
    key: string
    name: string
    description?: string | null
    enabledFor?: FeatureFlagCreateenabledForInput | $Enums.SubscriptionTier[]
    isGlobal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureFlagUncheckedCreateInput = {
    id?: string
    key: string
    name: string
    description?: string | null
    enabledFor?: FeatureFlagCreateenabledForInput | $Enums.SubscriptionTier[]
    isGlobal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureFlagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabledFor?: FeatureFlagUpdateenabledForInput | $Enums.SubscriptionTier[]
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureFlagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabledFor?: FeatureFlagUpdateenabledForInput | $Enums.SubscriptionTier[]
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureFlagCreateManyInput = {
    id?: string
    key: string
    name: string
    description?: string | null
    enabledFor?: FeatureFlagCreateenabledForInput | $Enums.SubscriptionTier[]
    isGlobal?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FeatureFlagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabledFor?: FeatureFlagUpdateenabledForInput | $Enums.SubscriptionTier[]
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeatureFlagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enabledFor?: FeatureFlagUpdateenabledForInput | $Enums.SubscriptionTier[]
    isGlobal?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitCounterCreateInput = {
    id?: string
    action: string
    scope: $Enums.RateLimitScope
    keyHash: string
    windowStart: Date | string
    windowEnd: Date | string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RateLimitCounterUncheckedCreateInput = {
    id?: string
    action: string
    scope: $Enums.RateLimitScope
    keyHash: string
    windowStart: Date | string
    windowEnd: Date | string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RateLimitCounterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    scope?: EnumRateLimitScopeFieldUpdateOperationsInput | $Enums.RateLimitScope
    keyHash?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitCounterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    scope?: EnumRateLimitScopeFieldUpdateOperationsInput | $Enums.RateLimitScope
    keyHash?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitCounterCreateManyInput = {
    id?: string
    action: string
    scope: $Enums.RateLimitScope
    keyHash: string
    windowStart: Date | string
    windowEnd: Date | string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RateLimitCounterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    scope?: EnumRateLimitScopeFieldUpdateOperationsInput | $Enums.RateLimitScope
    keyHash?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RateLimitCounterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    scope?: EnumRateLimitScopeFieldUpdateOperationsInput | $Enums.RateLimitScope
    keyHash?: StringFieldUpdateOperationsInput | string
    windowStart?: DateTimeFieldUpdateOperationsInput | Date | string
    windowEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailJobCreateInput = {
    id?: string
    type: $Enums.EmailJobType
    toEmail: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EmailJobStatus
    attempts?: number
    maxAttempts?: number
    nextAttemptAt?: Date | string
    lastAttemptAt?: Date | string | null
    sentAt?: Date | string | null
    lastError?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailJobUncheckedCreateInput = {
    id?: string
    type: $Enums.EmailJobType
    toEmail: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EmailJobStatus
    attempts?: number
    maxAttempts?: number
    nextAttemptAt?: Date | string
    lastAttemptAt?: Date | string | null
    sentAt?: Date | string | null
    lastError?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailJobTypeFieldUpdateOperationsInput | $Enums.EmailJobType
    toEmail?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEmailJobStatusFieldUpdateOperationsInput | $Enums.EmailJobStatus
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailJobTypeFieldUpdateOperationsInput | $Enums.EmailJobType
    toEmail?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEmailJobStatusFieldUpdateOperationsInput | $Enums.EmailJobStatus
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailJobCreateManyInput = {
    id?: string
    type: $Enums.EmailJobType
    toEmail: string
    payload: JsonNullValueInput | InputJsonValue
    status?: $Enums.EmailJobStatus
    attempts?: number
    maxAttempts?: number
    nextAttemptAt?: Date | string
    lastAttemptAt?: Date | string | null
    sentAt?: Date | string | null
    lastError?: string | null
    idempotencyKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailJobTypeFieldUpdateOperationsInput | $Enums.EmailJobType
    toEmail?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEmailJobStatusFieldUpdateOperationsInput | $Enums.EmailJobStatus
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumEmailJobTypeFieldUpdateOperationsInput | $Enums.EmailJobType
    toEmail?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    status?: EnumEmailJobStatusFieldUpdateOperationsInput | $Enums.EmailJobStatus
    attempts?: IntFieldUpdateOperationsInput | number
    maxAttempts?: IntFieldUpdateOperationsInput | number
    nextAttemptAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastAttemptAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastError?: NullableStringFieldUpdateOperationsInput | string | null
    idempotencyKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PromptListRelationFilter = {
    every?: PromptWhereInput
    some?: PromptWhereInput
    none?: PromptWhereInput
  }

  export type EvaluationListRelationFilter = {
    every?: EvaluationWhereInput
    some?: EvaluationWhereInput
    none?: EvaluationWhereInput
  }

  export type UserApiKeyListRelationFilter = {
    every?: UserApiKeyWhereInput
    some?: UserApiKeyWhereInput
    none?: UserApiKeyWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type UsageRecordListRelationFilter = {
    every?: UsageRecordWhereInput
    some?: UsageRecordWhereInput
    none?: UsageRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PromptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EvaluationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsageRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    supabaseId?: SortOrder
    avatarUrl?: SortOrder
    locale?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    supabaseId?: SortOrder
    avatarUrl?: SortOrder
    locale?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    supabaseId?: SortOrder
    avatarUrl?: SortOrder
    locale?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumLLMProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.LLMProvider | EnumLLMProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LLMProvider[] | ListEnumLLMProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LLMProvider[] | ListEnumLLMProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLLMProviderFilter<$PrismaModel> | $Enums.LLMProvider
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserApiKeyUserIdProviderCompoundUniqueInput = {
    userId: string
    provider: $Enums.LLMProvider
  }

  export type UserApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    provider?: SortOrder
    encryptedKey?: SortOrder
    iv?: SortOrder
    authTag?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLLMProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LLMProvider | EnumLLMProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LLMProvider[] | ListEnumLLMProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LLMProvider[] | ListEnumLLMProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLLMProviderWithAggregatesFilter<$PrismaModel> | $Enums.LLMProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLLMProviderFilter<$PrismaModel>
    _max?: NestedEnumLLMProviderFilter<$PrismaModel>
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type EnumPromptToneFilter<$PrismaModel = never> = {
    equals?: $Enums.PromptTone | EnumPromptToneFieldRefInput<$PrismaModel>
    in?: $Enums.PromptTone[] | ListEnumPromptToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromptTone[] | ListEnumPromptToneFieldRefInput<$PrismaModel>
    not?: NestedEnumPromptToneFilter<$PrismaModel> | $Enums.PromptTone
  }

  export type EnumOutputFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputFormat | EnumOutputFormatFieldRefInput<$PrismaModel>
    in?: $Enums.OutputFormat[] | ListEnumOutputFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputFormat[] | ListEnumOutputFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputFormatFilter<$PrismaModel> | $Enums.OutputFormat
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PromptCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rawInput?: SortOrder
    optimizedText?: SortOrder
    taskType?: SortOrder
    tone?: SortOrder
    format?: SortOrder
    targetLlm?: SortOrder
    tags?: SortOrder
    isPublic?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rawInput?: SortOrder
    optimizedText?: SortOrder
    taskType?: SortOrder
    tone?: SortOrder
    format?: SortOrder
    targetLlm?: SortOrder
    isPublic?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    rawInput?: SortOrder
    optimizedText?: SortOrder
    taskType?: SortOrder
    tone?: SortOrder
    format?: SortOrder
    targetLlm?: SortOrder
    isPublic?: SortOrder
    deletedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type EnumPromptToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromptTone | EnumPromptToneFieldRefInput<$PrismaModel>
    in?: $Enums.PromptTone[] | ListEnumPromptToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromptTone[] | ListEnumPromptToneFieldRefInput<$PrismaModel>
    not?: NestedEnumPromptToneWithAggregatesFilter<$PrismaModel> | $Enums.PromptTone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromptToneFilter<$PrismaModel>
    _max?: NestedEnumPromptToneFilter<$PrismaModel>
  }

  export type EnumOutputFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputFormat | EnumOutputFormatFieldRefInput<$PrismaModel>
    in?: $Enums.OutputFormat[] | ListEnumOutputFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputFormat[] | ListEnumOutputFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputFormatWithAggregatesFilter<$PrismaModel> | $Enums.OutputFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputFormatFilter<$PrismaModel>
    _max?: NestedEnumOutputFormatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PromptNullableScalarRelationFilter = {
    is?: PromptWhereInput | null
    isNot?: PromptWhereInput | null
  }

  export type EvaluationCountOrderByAggregateInput = {
    id?: SortOrder
    promptId?: SortOrder
    userId?: SortOrder
    promptText?: SortOrder
    structureScore?: SortOrder
    clarityScore?: SortOrder
    completenessScore?: SortOrder
    specificityScore?: SortOrder
    overallScore?: SortOrder
    feedback?: SortOrder
    suggestions?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
  }

  export type EvaluationAvgOrderByAggregateInput = {
    structureScore?: SortOrder
    clarityScore?: SortOrder
    completenessScore?: SortOrder
    specificityScore?: SortOrder
    overallScore?: SortOrder
  }

  export type EvaluationMaxOrderByAggregateInput = {
    id?: SortOrder
    promptId?: SortOrder
    userId?: SortOrder
    promptText?: SortOrder
    structureScore?: SortOrder
    clarityScore?: SortOrder
    completenessScore?: SortOrder
    specificityScore?: SortOrder
    overallScore?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
  }

  export type EvaluationMinOrderByAggregateInput = {
    id?: SortOrder
    promptId?: SortOrder
    userId?: SortOrder
    promptText?: SortOrder
    structureScore?: SortOrder
    clarityScore?: SortOrder
    completenessScore?: SortOrder
    specificityScore?: SortOrder
    overallScore?: SortOrder
    provider?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
  }

  export type EvaluationSumOrderByAggregateInput = {
    structureScore?: SortOrder
    clarityScore?: SortOrder
    completenessScore?: SortOrder
    specificityScore?: SortOrder
    overallScore?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumTemplateCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateCategory | EnumTemplateCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateCategory[] | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateCategory[] | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateCategoryFilter<$PrismaModel> | $Enums.TemplateCategory
  }

  export type PromptTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    template?: SortOrder
    variables?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PromptTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTemplateCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateCategory | EnumTemplateCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateCategory[] | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateCategory[] | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TemplateCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateCategoryFilter<$PrismaModel>
    _max?: NestedEnumTemplateCategoryFilter<$PrismaModel>
  }

  export type EnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type EnumBillingIntervalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBillingIntervalNullableFilter<$PrismaModel> | $Enums.BillingInterval | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    billingInterval?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    trialEndsAt?: SortOrder
    canceledAt?: SortOrder
    gatewayCustomerId?: SortOrder
    gatewaySubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    billingInterval?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    trialEndsAt?: SortOrder
    canceledAt?: SortOrder
    gatewayCustomerId?: SortOrder
    gatewaySubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tier?: SortOrder
    status?: SortOrder
    billingInterval?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    trialEndsAt?: SortOrder
    canceledAt?: SortOrder
    gatewayCustomerId?: SortOrder
    gatewaySubscriptionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumBillingIntervalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBillingIntervalNullableWithAggregatesFilter<$PrismaModel> | $Enums.BillingInterval | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBillingIntervalNullableFilter<$PrismaModel>
    _max?: NestedEnumBillingIntervalNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubscriptionScalarRelationFilter = {
    is?: SubscriptionWhereInput
    isNot?: SubscriptionWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    gatewayPaymentId?: SortOrder
    gatewayResponse?: SortOrder
    invoiceNumber?: SortOrder
    paidAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    gatewayPaymentId?: SortOrder
    invoiceNumber?: SortOrder
    paidAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    gatewayPaymentId?: SortOrder
    invoiceNumber?: SortOrder
    paidAt?: SortOrder
    failedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumUsageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageType | EnumUsageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UsageType[] | ListEnumUsageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageType[] | ListEnumUsageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageTypeFilter<$PrismaModel> | $Enums.UsageType
  }

  export type UsageRecordUserIdTypeDateCompoundUniqueInput = {
    userId: string
    type: $Enums.UsageType
    date: Date | string
  }

  export type UsageRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    count?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageRecordAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type UsageRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    count?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    count?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type UsageRecordSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type EnumUsageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageType | EnumUsageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UsageType[] | ListEnumUsageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageType[] | ListEnumUsageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageTypeWithAggregatesFilter<$PrismaModel> | $Enums.UsageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsageTypeFilter<$PrismaModel>
    _max?: NestedEnumUsageTypeFilter<$PrismaModel>
  }

  export type EnumSubscriptionTierNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel> | null
    has?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    hasSome?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type FeatureFlagCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    enabledFor?: SortOrder
    isGlobal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureFlagMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isGlobal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeatureFlagMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isGlobal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRateLimitScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.RateLimitScope | EnumRateLimitScopeFieldRefInput<$PrismaModel>
    in?: $Enums.RateLimitScope[] | ListEnumRateLimitScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RateLimitScope[] | ListEnumRateLimitScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumRateLimitScopeFilter<$PrismaModel> | $Enums.RateLimitScope
  }

  export type RateLimitCounterActionScopeKeyHashWindowStartCompoundUniqueInput = {
    action: string
    scope: $Enums.RateLimitScope
    keyHash: string
    windowStart: Date | string
  }

  export type RateLimitCounterCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    scope?: SortOrder
    keyHash?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RateLimitCounterAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type RateLimitCounterMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    scope?: SortOrder
    keyHash?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RateLimitCounterMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    scope?: SortOrder
    keyHash?: SortOrder
    windowStart?: SortOrder
    windowEnd?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RateLimitCounterSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type EnumRateLimitScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RateLimitScope | EnumRateLimitScopeFieldRefInput<$PrismaModel>
    in?: $Enums.RateLimitScope[] | ListEnumRateLimitScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RateLimitScope[] | ListEnumRateLimitScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumRateLimitScopeWithAggregatesFilter<$PrismaModel> | $Enums.RateLimitScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRateLimitScopeFilter<$PrismaModel>
    _max?: NestedEnumRateLimitScopeFilter<$PrismaModel>
  }

  export type EnumEmailJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailJobType | EnumEmailJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailJobType[] | ListEnumEmailJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailJobType[] | ListEnumEmailJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailJobTypeFilter<$PrismaModel> | $Enums.EmailJobType
  }

  export type EnumEmailJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailJobStatus | EnumEmailJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailJobStatus[] | ListEnumEmailJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailJobStatus[] | ListEnumEmailJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailJobStatusFilter<$PrismaModel> | $Enums.EmailJobStatus
  }

  export type EmailJobCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    toEmail?: SortOrder
    payload?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrder
    lastAttemptAt?: SortOrder
    sentAt?: SortOrder
    lastError?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailJobAvgOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type EmailJobMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    toEmail?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrder
    lastAttemptAt?: SortOrder
    sentAt?: SortOrder
    lastError?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailJobMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    toEmail?: SortOrder
    status?: SortOrder
    attempts?: SortOrder
    maxAttempts?: SortOrder
    nextAttemptAt?: SortOrder
    lastAttemptAt?: SortOrder
    sentAt?: SortOrder
    lastError?: SortOrder
    idempotencyKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailJobSumOrderByAggregateInput = {
    attempts?: SortOrder
    maxAttempts?: SortOrder
  }

  export type EnumEmailJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailJobType | EnumEmailJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailJobType[] | ListEnumEmailJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailJobType[] | ListEnumEmailJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailJobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailJobTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailJobTypeFilter<$PrismaModel>
  }

  export type EnumEmailJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailJobStatus | EnumEmailJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailJobStatus[] | ListEnumEmailJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailJobStatus[] | ListEnumEmailJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailJobStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailJobStatusFilter<$PrismaModel>
  }

  export type PromptCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type EvaluationCreateNestedManyWithoutUserInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type UserApiKeyCreateNestedManyWithoutUserInput = {
    create?: XOR<UserApiKeyCreateWithoutUserInput, UserApiKeyUncheckedCreateWithoutUserInput> | UserApiKeyCreateWithoutUserInput[] | UserApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiKeyCreateOrConnectWithoutUserInput | UserApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: UserApiKeyCreateManyUserInputEnvelope
    connect?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UsageRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<UsageRecordCreateWithoutUserInput, UsageRecordUncheckedCreateWithoutUserInput> | UsageRecordCreateWithoutUserInput[] | UsageRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageRecordCreateOrConnectWithoutUserInput | UsageRecordCreateOrConnectWithoutUserInput[]
    createMany?: UsageRecordCreateManyUserInputEnvelope
    connect?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
  }

  export type PromptUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type UserApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserApiKeyCreateWithoutUserInput, UserApiKeyUncheckedCreateWithoutUserInput> | UserApiKeyCreateWithoutUserInput[] | UserApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiKeyCreateOrConnectWithoutUserInput | UserApiKeyCreateOrConnectWithoutUserInput[]
    createMany?: UserApiKeyCreateManyUserInputEnvelope
    connect?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UsageRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UsageRecordCreateWithoutUserInput, UsageRecordUncheckedCreateWithoutUserInput> | UsageRecordCreateWithoutUserInput[] | UsageRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageRecordCreateOrConnectWithoutUserInput | UsageRecordCreateOrConnectWithoutUserInput[]
    createMany?: UsageRecordCreateManyUserInputEnvelope
    connect?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PromptUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutUserInput | PromptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutUserInput | PromptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutUserInput | PromptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type EvaluationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutUserInput | EvaluationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutUserInput | EvaluationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutUserInput | EvaluationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type UserApiKeyUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserApiKeyCreateWithoutUserInput, UserApiKeyUncheckedCreateWithoutUserInput> | UserApiKeyCreateWithoutUserInput[] | UserApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiKeyCreateOrConnectWithoutUserInput | UserApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: UserApiKeyUpsertWithWhereUniqueWithoutUserInput | UserApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserApiKeyCreateManyUserInputEnvelope
    set?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
    disconnect?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
    delete?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
    connect?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
    update?: UserApiKeyUpdateWithWhereUniqueWithoutUserInput | UserApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserApiKeyUpdateManyWithWhereWithoutUserInput | UserApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserApiKeyScalarWhereInput | UserApiKeyScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UsageRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsageRecordCreateWithoutUserInput, UsageRecordUncheckedCreateWithoutUserInput> | UsageRecordCreateWithoutUserInput[] | UsageRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageRecordCreateOrConnectWithoutUserInput | UsageRecordCreateOrConnectWithoutUserInput[]
    upsert?: UsageRecordUpsertWithWhereUniqueWithoutUserInput | UsageRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsageRecordCreateManyUserInputEnvelope
    set?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
    disconnect?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
    delete?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
    connect?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
    update?: UsageRecordUpdateWithWhereUniqueWithoutUserInput | UsageRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsageRecordUpdateManyWithWhereWithoutUserInput | UsageRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsageRecordScalarWhereInput | UsageRecordScalarWhereInput[]
  }

  export type PromptUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput> | PromptCreateWithoutUserInput[] | PromptUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptCreateOrConnectWithoutUserInput | PromptCreateOrConnectWithoutUserInput[]
    upsert?: PromptUpsertWithWhereUniqueWithoutUserInput | PromptUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptCreateManyUserInputEnvelope
    set?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    disconnect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    delete?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    connect?: PromptWhereUniqueInput | PromptWhereUniqueInput[]
    update?: PromptUpdateWithWhereUniqueWithoutUserInput | PromptUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptUpdateManyWithWhereWithoutUserInput | PromptUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptScalarWhereInput | PromptScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput> | EvaluationCreateWithoutUserInput[] | EvaluationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutUserInput | EvaluationCreateOrConnectWithoutUserInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutUserInput | EvaluationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EvaluationCreateManyUserInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutUserInput | EvaluationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutUserInput | EvaluationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type UserApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserApiKeyCreateWithoutUserInput, UserApiKeyUncheckedCreateWithoutUserInput> | UserApiKeyCreateWithoutUserInput[] | UserApiKeyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiKeyCreateOrConnectWithoutUserInput | UserApiKeyCreateOrConnectWithoutUserInput[]
    upsert?: UserApiKeyUpsertWithWhereUniqueWithoutUserInput | UserApiKeyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserApiKeyCreateManyUserInputEnvelope
    set?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
    disconnect?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
    delete?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
    connect?: UserApiKeyWhereUniqueInput | UserApiKeyWhereUniqueInput[]
    update?: UserApiKeyUpdateWithWhereUniqueWithoutUserInput | UserApiKeyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserApiKeyUpdateManyWithWhereWithoutUserInput | UserApiKeyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserApiKeyScalarWhereInput | UserApiKeyScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UsageRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UsageRecordCreateWithoutUserInput, UsageRecordUncheckedCreateWithoutUserInput> | UsageRecordCreateWithoutUserInput[] | UsageRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UsageRecordCreateOrConnectWithoutUserInput | UsageRecordCreateOrConnectWithoutUserInput[]
    upsert?: UsageRecordUpsertWithWhereUniqueWithoutUserInput | UsageRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UsageRecordCreateManyUserInputEnvelope
    set?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
    disconnect?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
    delete?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
    connect?: UsageRecordWhereUniqueInput | UsageRecordWhereUniqueInput[]
    update?: UsageRecordUpdateWithWhereUniqueWithoutUserInput | UsageRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UsageRecordUpdateManyWithWhereWithoutUserInput | UsageRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UsageRecordScalarWhereInput | UsageRecordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLLMProviderFieldUpdateOperationsInput = {
    set?: $Enums.LLMProvider
  }

  export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: UserCreateOrConnectWithoutApiKeysInput
    upsert?: UserUpsertWithoutApiKeysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApiKeysInput, UserUpdateWithoutApiKeysInput>, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type PromptCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPromptsInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    connect?: UserWhereUniqueInput
  }

  export type EvaluationCreateNestedManyWithoutPromptInput = {
    create?: XOR<EvaluationCreateWithoutPromptInput, EvaluationUncheckedCreateWithoutPromptInput> | EvaluationCreateWithoutPromptInput[] | EvaluationUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutPromptInput | EvaluationCreateOrConnectWithoutPromptInput[]
    createMany?: EvaluationCreateManyPromptInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EvaluationUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<EvaluationCreateWithoutPromptInput, EvaluationUncheckedCreateWithoutPromptInput> | EvaluationCreateWithoutPromptInput[] | EvaluationUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutPromptInput | EvaluationCreateOrConnectWithoutPromptInput[]
    createMany?: EvaluationCreateManyPromptInputEnvelope
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type EnumPromptToneFieldUpdateOperationsInput = {
    set?: $Enums.PromptTone
  }

  export type EnumOutputFormatFieldUpdateOperationsInput = {
    set?: $Enums.OutputFormat
  }

  export type PromptUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    upsert?: UserUpsertWithoutPromptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPromptsInput, UserUpdateWithoutPromptsInput>, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type EvaluationUpdateManyWithoutPromptNestedInput = {
    create?: XOR<EvaluationCreateWithoutPromptInput, EvaluationUncheckedCreateWithoutPromptInput> | EvaluationCreateWithoutPromptInput[] | EvaluationUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutPromptInput | EvaluationCreateOrConnectWithoutPromptInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutPromptInput | EvaluationUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: EvaluationCreateManyPromptInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutPromptInput | EvaluationUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutPromptInput | EvaluationUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EvaluationUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<EvaluationCreateWithoutPromptInput, EvaluationUncheckedCreateWithoutPromptInput> | EvaluationCreateWithoutPromptInput[] | EvaluationUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: EvaluationCreateOrConnectWithoutPromptInput | EvaluationCreateOrConnectWithoutPromptInput[]
    upsert?: EvaluationUpsertWithWhereUniqueWithoutPromptInput | EvaluationUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: EvaluationCreateManyPromptInputEnvelope
    set?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    disconnect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    delete?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    connect?: EvaluationWhereUniqueInput | EvaluationWhereUniqueInput[]
    update?: EvaluationUpdateWithWhereUniqueWithoutPromptInput | EvaluationUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: EvaluationUpdateManyWithWhereWithoutPromptInput | EvaluationUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
  }

  export type EvaluationCreatesuggestionsInput = {
    set: string[]
  }

  export type PromptCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<PromptCreateWithoutEvaluationsInput, PromptUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: PromptCreateOrConnectWithoutEvaluationsInput
    connect?: PromptWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEvaluationsInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EvaluationUpdatesuggestionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PromptUpdateOneWithoutEvaluationsNestedInput = {
    create?: XOR<PromptCreateWithoutEvaluationsInput, PromptUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: PromptCreateOrConnectWithoutEvaluationsInput
    upsert?: PromptUpsertWithoutEvaluationsInput
    disconnect?: PromptWhereInput | boolean
    delete?: PromptWhereInput | boolean
    connect?: PromptWhereUniqueInput
    update?: XOR<XOR<PromptUpdateToOneWithWhereWithoutEvaluationsInput, PromptUpdateWithoutEvaluationsInput>, PromptUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UserUpdateOneRequiredWithoutEvaluationsNestedInput = {
    create?: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvaluationsInput
    upsert?: UserUpsertWithoutEvaluationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvaluationsInput, UserUpdateWithoutEvaluationsInput>, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type EnumTemplateCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TemplateCategory
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumSubscriptionTierFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionTier
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type NullableEnumBillingIntervalFieldUpdateOperationsInput = {
    set?: $Enums.BillingInterval | null
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type SubscriptionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableEnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod | null
  }

  export type SubscriptionUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionUpsertWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionUpdateWithoutPaymentsInput>, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutUsageRecordsInput = {
    create?: XOR<UserCreateWithoutUsageRecordsInput, UserUncheckedCreateWithoutUsageRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageRecordsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumUsageTypeFieldUpdateOperationsInput = {
    set?: $Enums.UsageType
  }

  export type UserUpdateOneRequiredWithoutUsageRecordsNestedInput = {
    create?: XOR<UserCreateWithoutUsageRecordsInput, UserUncheckedCreateWithoutUsageRecordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsageRecordsInput
    upsert?: UserUpsertWithoutUsageRecordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsageRecordsInput, UserUpdateWithoutUsageRecordsInput>, UserUncheckedUpdateWithoutUsageRecordsInput>
  }

  export type FeatureFlagCreateenabledForInput = {
    set: $Enums.SubscriptionTier[]
  }

  export type FeatureFlagUpdateenabledForInput = {
    set?: $Enums.SubscriptionTier[]
    push?: $Enums.SubscriptionTier | $Enums.SubscriptionTier[]
  }

  export type EnumRateLimitScopeFieldUpdateOperationsInput = {
    set?: $Enums.RateLimitScope
  }

  export type EnumEmailJobTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmailJobType
  }

  export type EnumEmailJobStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmailJobStatus
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumLLMProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.LLMProvider | EnumLLMProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LLMProvider[] | ListEnumLLMProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LLMProvider[] | ListEnumLLMProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLLMProviderFilter<$PrismaModel> | $Enums.LLMProvider
  }

  export type NestedEnumLLMProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LLMProvider | EnumLLMProviderFieldRefInput<$PrismaModel>
    in?: $Enums.LLMProvider[] | ListEnumLLMProviderFieldRefInput<$PrismaModel>
    notIn?: $Enums.LLMProvider[] | ListEnumLLMProviderFieldRefInput<$PrismaModel>
    not?: NestedEnumLLMProviderWithAggregatesFilter<$PrismaModel> | $Enums.LLMProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLLMProviderFilter<$PrismaModel>
    _max?: NestedEnumLLMProviderFilter<$PrismaModel>
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumPromptToneFilter<$PrismaModel = never> = {
    equals?: $Enums.PromptTone | EnumPromptToneFieldRefInput<$PrismaModel>
    in?: $Enums.PromptTone[] | ListEnumPromptToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromptTone[] | ListEnumPromptToneFieldRefInput<$PrismaModel>
    not?: NestedEnumPromptToneFilter<$PrismaModel> | $Enums.PromptTone
  }

  export type NestedEnumOutputFormatFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputFormat | EnumOutputFormatFieldRefInput<$PrismaModel>
    in?: $Enums.OutputFormat[] | ListEnumOutputFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputFormat[] | ListEnumOutputFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputFormatFilter<$PrismaModel> | $Enums.OutputFormat
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedEnumPromptToneWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromptTone | EnumPromptToneFieldRefInput<$PrismaModel>
    in?: $Enums.PromptTone[] | ListEnumPromptToneFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromptTone[] | ListEnumPromptToneFieldRefInput<$PrismaModel>
    not?: NestedEnumPromptToneWithAggregatesFilter<$PrismaModel> | $Enums.PromptTone
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromptToneFilter<$PrismaModel>
    _max?: NestedEnumPromptToneFilter<$PrismaModel>
  }

  export type NestedEnumOutputFormatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OutputFormat | EnumOutputFormatFieldRefInput<$PrismaModel>
    in?: $Enums.OutputFormat[] | ListEnumOutputFormatFieldRefInput<$PrismaModel>
    notIn?: $Enums.OutputFormat[] | ListEnumOutputFormatFieldRefInput<$PrismaModel>
    not?: NestedEnumOutputFormatWithAggregatesFilter<$PrismaModel> | $Enums.OutputFormat
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOutputFormatFilter<$PrismaModel>
    _max?: NestedEnumOutputFormatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumTemplateCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateCategory | EnumTemplateCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateCategory[] | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateCategory[] | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateCategoryFilter<$PrismaModel> | $Enums.TemplateCategory
  }

  export type NestedEnumTemplateCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TemplateCategory | EnumTemplateCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TemplateCategory[] | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TemplateCategory[] | ListEnumTemplateCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTemplateCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TemplateCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTemplateCategoryFilter<$PrismaModel>
    _max?: NestedEnumTemplateCategoryFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionTierFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierFilter<$PrismaModel> | $Enums.SubscriptionTier
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumBillingIntervalNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBillingIntervalNullableFilter<$PrismaModel> | $Enums.BillingInterval | null
  }

  export type NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionTier | EnumSubscriptionTierFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionTier[] | ListEnumSubscriptionTierFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionTierWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionTierFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionTierFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumBillingIntervalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillingInterval | EnumBillingIntervalFieldRefInput<$PrismaModel> | null
    in?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BillingInterval[] | ListEnumBillingIntervalFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBillingIntervalNullableWithAggregatesFilter<$PrismaModel> | $Enums.BillingInterval | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBillingIntervalNullableFilter<$PrismaModel>
    _max?: NestedEnumBillingIntervalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableFilter<$PrismaModel> | $Enums.PaymentMethod | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumUsageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageType | EnumUsageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UsageType[] | ListEnumUsageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageType[] | ListEnumUsageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageTypeFilter<$PrismaModel> | $Enums.UsageType
  }

  export type NestedEnumUsageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageType | EnumUsageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UsageType[] | ListEnumUsageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageType[] | ListEnumUsageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageTypeWithAggregatesFilter<$PrismaModel> | $Enums.UsageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsageTypeFilter<$PrismaModel>
    _max?: NestedEnumUsageTypeFilter<$PrismaModel>
  }

  export type NestedEnumRateLimitScopeFilter<$PrismaModel = never> = {
    equals?: $Enums.RateLimitScope | EnumRateLimitScopeFieldRefInput<$PrismaModel>
    in?: $Enums.RateLimitScope[] | ListEnumRateLimitScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RateLimitScope[] | ListEnumRateLimitScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumRateLimitScopeFilter<$PrismaModel> | $Enums.RateLimitScope
  }

  export type NestedEnumRateLimitScopeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RateLimitScope | EnumRateLimitScopeFieldRefInput<$PrismaModel>
    in?: $Enums.RateLimitScope[] | ListEnumRateLimitScopeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RateLimitScope[] | ListEnumRateLimitScopeFieldRefInput<$PrismaModel>
    not?: NestedEnumRateLimitScopeWithAggregatesFilter<$PrismaModel> | $Enums.RateLimitScope
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRateLimitScopeFilter<$PrismaModel>
    _max?: NestedEnumRateLimitScopeFilter<$PrismaModel>
  }

  export type NestedEnumEmailJobTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailJobType | EnumEmailJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailJobType[] | ListEnumEmailJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailJobType[] | ListEnumEmailJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailJobTypeFilter<$PrismaModel> | $Enums.EmailJobType
  }

  export type NestedEnumEmailJobStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailJobStatus | EnumEmailJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailJobStatus[] | ListEnumEmailJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailJobStatus[] | ListEnumEmailJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailJobStatusFilter<$PrismaModel> | $Enums.EmailJobStatus
  }

  export type NestedEnumEmailJobTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailJobType | EnumEmailJobTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmailJobType[] | ListEnumEmailJobTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailJobType[] | ListEnumEmailJobTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailJobTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmailJobType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailJobTypeFilter<$PrismaModel>
    _max?: NestedEnumEmailJobTypeFilter<$PrismaModel>
  }

  export type NestedEnumEmailJobStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmailJobStatus | EnumEmailJobStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EmailJobStatus[] | ListEnumEmailJobStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EmailJobStatus[] | ListEnumEmailJobStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEmailJobStatusWithAggregatesFilter<$PrismaModel> | $Enums.EmailJobStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmailJobStatusFilter<$PrismaModel>
    _max?: NestedEnumEmailJobStatusFilter<$PrismaModel>
  }

  export type PromptCreateWithoutUserInput = {
    id?: string
    rawInput: string
    optimizedText: string
    taskType: $Enums.TaskType
    tone: $Enums.PromptTone
    format: $Enums.OutputFormat
    targetLlm: $Enums.LLMProvider
    tags?: PromptCreatetagsInput | string[]
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateWithoutUserInput = {
    id?: string
    rawInput: string
    optimizedText: string
    taskType: $Enums.TaskType
    tone: $Enums.PromptTone
    format: $Enums.OutputFormat
    targetLlm: $Enums.LLMProvider
    tags?: PromptCreatetagsInput | string[]
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptCreateOrConnectWithoutUserInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput>
  }

  export type PromptCreateManyUserInputEnvelope = {
    data: PromptCreateManyUserInput | PromptCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EvaluationCreateWithoutUserInput = {
    id?: string
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationCreatesuggestionsInput | string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt?: Date | string
    prompt?: PromptCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateWithoutUserInput = {
    id?: string
    promptId?: string | null
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationCreatesuggestionsInput | string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt?: Date | string
  }

  export type EvaluationCreateOrConnectWithoutUserInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput>
  }

  export type EvaluationCreateManyUserInputEnvelope = {
    data: EvaluationCreateManyUserInput | EvaluationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserApiKeyCreateWithoutUserInput = {
    id?: string
    provider: $Enums.LLMProvider
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserApiKeyUncheckedCreateWithoutUserInput = {
    id?: string
    provider: $Enums.LLMProvider
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserApiKeyCreateOrConnectWithoutUserInput = {
    where: UserApiKeyWhereUniqueInput
    create: XOR<UserApiKeyCreateWithoutUserInput, UserApiKeyUncheckedCreateWithoutUserInput>
  }

  export type UserApiKeyCreateManyUserInputEnvelope = {
    data: UserApiKeyCreateManyUserInput | UserApiKeyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    billingInterval?: $Enums.BillingInterval | null
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    trialEndsAt?: Date | string | null
    canceledAt?: Date | string | null
    gatewayCustomerId?: string | null
    gatewaySubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    billingInterval?: $Enums.BillingInterval | null
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    trialEndsAt?: Date | string | null
    canceledAt?: Date | string | null
    gatewayCustomerId?: string | null
    gatewaySubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UsageRecordCreateWithoutUserInput = {
    id?: string
    type: $Enums.UsageType
    count?: number
    date?: Date | string
    createdAt?: Date | string
  }

  export type UsageRecordUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.UsageType
    count?: number
    date?: Date | string
    createdAt?: Date | string
  }

  export type UsageRecordCreateOrConnectWithoutUserInput = {
    where: UsageRecordWhereUniqueInput
    create: XOR<UsageRecordCreateWithoutUserInput, UsageRecordUncheckedCreateWithoutUserInput>
  }

  export type UsageRecordCreateManyUserInputEnvelope = {
    data: UsageRecordCreateManyUserInput | UsageRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PromptUpsertWithWhereUniqueWithoutUserInput = {
    where: PromptWhereUniqueInput
    update: XOR<PromptUpdateWithoutUserInput, PromptUncheckedUpdateWithoutUserInput>
    create: XOR<PromptCreateWithoutUserInput, PromptUncheckedCreateWithoutUserInput>
  }

  export type PromptUpdateWithWhereUniqueWithoutUserInput = {
    where: PromptWhereUniqueInput
    data: XOR<PromptUpdateWithoutUserInput, PromptUncheckedUpdateWithoutUserInput>
  }

  export type PromptUpdateManyWithWhereWithoutUserInput = {
    where: PromptScalarWhereInput
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyWithoutUserInput>
  }

  export type PromptScalarWhereInput = {
    AND?: PromptScalarWhereInput | PromptScalarWhereInput[]
    OR?: PromptScalarWhereInput[]
    NOT?: PromptScalarWhereInput | PromptScalarWhereInput[]
    id?: StringFilter<"Prompt"> | string
    userId?: StringFilter<"Prompt"> | string
    rawInput?: StringFilter<"Prompt"> | string
    optimizedText?: StringFilter<"Prompt"> | string
    taskType?: EnumTaskTypeFilter<"Prompt"> | $Enums.TaskType
    tone?: EnumPromptToneFilter<"Prompt"> | $Enums.PromptTone
    format?: EnumOutputFormatFilter<"Prompt"> | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFilter<"Prompt"> | $Enums.LLMProvider
    tags?: StringNullableListFilter<"Prompt">
    isPublic?: BoolFilter<"Prompt"> | boolean
    deletedAt?: DateTimeNullableFilter<"Prompt"> | Date | string | null
    createdAt?: DateTimeFilter<"Prompt"> | Date | string
    updatedAt?: DateTimeFilter<"Prompt"> | Date | string
  }

  export type EvaluationUpsertWithWhereUniqueWithoutUserInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutUserInput, EvaluationUncheckedUpdateWithoutUserInput>
    create: XOR<EvaluationCreateWithoutUserInput, EvaluationUncheckedCreateWithoutUserInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutUserInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutUserInput, EvaluationUncheckedUpdateWithoutUserInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutUserInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutUserInput>
  }

  export type EvaluationScalarWhereInput = {
    AND?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    OR?: EvaluationScalarWhereInput[]
    NOT?: EvaluationScalarWhereInput | EvaluationScalarWhereInput[]
    id?: StringFilter<"Evaluation"> | string
    promptId?: StringNullableFilter<"Evaluation"> | string | null
    userId?: StringFilter<"Evaluation"> | string
    promptText?: StringFilter<"Evaluation"> | string
    structureScore?: FloatFilter<"Evaluation"> | number
    clarityScore?: FloatFilter<"Evaluation"> | number
    completenessScore?: FloatFilter<"Evaluation"> | number
    specificityScore?: FloatFilter<"Evaluation"> | number
    overallScore?: FloatFilter<"Evaluation"> | number
    feedback?: JsonFilter<"Evaluation">
    suggestions?: StringNullableListFilter<"Evaluation">
    provider?: EnumLLMProviderFilter<"Evaluation"> | $Enums.LLMProvider
    model?: StringFilter<"Evaluation"> | string
    createdAt?: DateTimeFilter<"Evaluation"> | Date | string
  }

  export type UserApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: UserApiKeyWhereUniqueInput
    update: XOR<UserApiKeyUpdateWithoutUserInput, UserApiKeyUncheckedUpdateWithoutUserInput>
    create: XOR<UserApiKeyCreateWithoutUserInput, UserApiKeyUncheckedCreateWithoutUserInput>
  }

  export type UserApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: UserApiKeyWhereUniqueInput
    data: XOR<UserApiKeyUpdateWithoutUserInput, UserApiKeyUncheckedUpdateWithoutUserInput>
  }

  export type UserApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: UserApiKeyScalarWhereInput
    data: XOR<UserApiKeyUpdateManyMutationInput, UserApiKeyUncheckedUpdateManyWithoutUserInput>
  }

  export type UserApiKeyScalarWhereInput = {
    AND?: UserApiKeyScalarWhereInput | UserApiKeyScalarWhereInput[]
    OR?: UserApiKeyScalarWhereInput[]
    NOT?: UserApiKeyScalarWhereInput | UserApiKeyScalarWhereInput[]
    id?: StringFilter<"UserApiKey"> | string
    userId?: StringFilter<"UserApiKey"> | string
    provider?: EnumLLMProviderFilter<"UserApiKey"> | $Enums.LLMProvider
    encryptedKey?: StringFilter<"UserApiKey"> | string
    iv?: StringFilter<"UserApiKey"> | string
    authTag?: StringFilter<"UserApiKey"> | string
    createdAt?: DateTimeFilter<"UserApiKey"> | Date | string
    updatedAt?: DateTimeFilter<"UserApiKey"> | Date | string
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    billingInterval?: NullableEnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval | null
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatewayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    billingInterval?: NullableEnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval | null
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatewayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type UsageRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: UsageRecordWhereUniqueInput
    update: XOR<UsageRecordUpdateWithoutUserInput, UsageRecordUncheckedUpdateWithoutUserInput>
    create: XOR<UsageRecordCreateWithoutUserInput, UsageRecordUncheckedCreateWithoutUserInput>
  }

  export type UsageRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: UsageRecordWhereUniqueInput
    data: XOR<UsageRecordUpdateWithoutUserInput, UsageRecordUncheckedUpdateWithoutUserInput>
  }

  export type UsageRecordUpdateManyWithWhereWithoutUserInput = {
    where: UsageRecordScalarWhereInput
    data: XOR<UsageRecordUpdateManyMutationInput, UsageRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type UsageRecordScalarWhereInput = {
    AND?: UsageRecordScalarWhereInput | UsageRecordScalarWhereInput[]
    OR?: UsageRecordScalarWhereInput[]
    NOT?: UsageRecordScalarWhereInput | UsageRecordScalarWhereInput[]
    id?: StringFilter<"UsageRecord"> | string
    userId?: StringFilter<"UsageRecord"> | string
    type?: EnumUsageTypeFilter<"UsageRecord"> | $Enums.UsageType
    count?: IntFilter<"UsageRecord"> | number
    date?: DateTimeFilter<"UsageRecord"> | Date | string
    createdAt?: DateTimeFilter<"UsageRecord"> | Date | string
  }

  export type UserCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    usageRecords?: UsageRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    usageRecords?: UsageRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApiKeysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
  }

  export type UserUpsertWithoutApiKeysInput = {
    update: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
    create: XOR<UserCreateWithoutApiKeysInput, UserUncheckedCreateWithoutApiKeysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApiKeysInput, UserUncheckedUpdateWithoutApiKeysInput>
  }

  export type UserUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    usageRecords?: UsageRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    usageRecords?: UsageRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPromptsInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    usageRecords?: UsageRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPromptsInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    usageRecords?: UsageRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPromptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
  }

  export type EvaluationCreateWithoutPromptInput = {
    id?: string
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationCreatesuggestionsInput | string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEvaluationsInput
  }

  export type EvaluationUncheckedCreateWithoutPromptInput = {
    id?: string
    userId: string
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationCreatesuggestionsInput | string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt?: Date | string
  }

  export type EvaluationCreateOrConnectWithoutPromptInput = {
    where: EvaluationWhereUniqueInput
    create: XOR<EvaluationCreateWithoutPromptInput, EvaluationUncheckedCreateWithoutPromptInput>
  }

  export type EvaluationCreateManyPromptInputEnvelope = {
    data: EvaluationCreateManyPromptInput | EvaluationCreateManyPromptInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPromptsInput = {
    update: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPromptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type UserUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    usageRecords?: UsageRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    usageRecords?: UsageRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EvaluationUpsertWithWhereUniqueWithoutPromptInput = {
    where: EvaluationWhereUniqueInput
    update: XOR<EvaluationUpdateWithoutPromptInput, EvaluationUncheckedUpdateWithoutPromptInput>
    create: XOR<EvaluationCreateWithoutPromptInput, EvaluationUncheckedCreateWithoutPromptInput>
  }

  export type EvaluationUpdateWithWhereUniqueWithoutPromptInput = {
    where: EvaluationWhereUniqueInput
    data: XOR<EvaluationUpdateWithoutPromptInput, EvaluationUncheckedUpdateWithoutPromptInput>
  }

  export type EvaluationUpdateManyWithWhereWithoutPromptInput = {
    where: EvaluationScalarWhereInput
    data: XOR<EvaluationUpdateManyMutationInput, EvaluationUncheckedUpdateManyWithoutPromptInput>
  }

  export type PromptCreateWithoutEvaluationsInput = {
    id?: string
    rawInput: string
    optimizedText: string
    taskType: $Enums.TaskType
    tone: $Enums.PromptTone
    format: $Enums.OutputFormat
    targetLlm: $Enums.LLMProvider
    tags?: PromptCreatetagsInput | string[]
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
  }

  export type PromptUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    userId: string
    rawInput: string
    optimizedText: string
    taskType: $Enums.TaskType
    tone: $Enums.PromptTone
    format: $Enums.OutputFormat
    targetLlm: $Enums.LLMProvider
    tags?: PromptCreatetagsInput | string[]
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PromptCreateOrConnectWithoutEvaluationsInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutEvaluationsInput, PromptUncheckedCreateWithoutEvaluationsInput>
  }

  export type UserCreateWithoutEvaluationsInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    usageRecords?: UsageRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEvaluationsInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    usageRecords?: UsageRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEvaluationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
  }

  export type PromptUpsertWithoutEvaluationsInput = {
    update: XOR<PromptUpdateWithoutEvaluationsInput, PromptUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<PromptCreateWithoutEvaluationsInput, PromptUncheckedCreateWithoutEvaluationsInput>
    where?: PromptWhereInput
  }

  export type PromptUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: PromptWhereInput
    data: XOR<PromptUpdateWithoutEvaluationsInput, PromptUncheckedUpdateWithoutEvaluationsInput>
  }

  export type PromptUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawInput?: StringFieldUpdateOperationsInput | string
    optimizedText?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    tone?: EnumPromptToneFieldUpdateOperationsInput | $Enums.PromptTone
    format?: EnumOutputFormatFieldUpdateOperationsInput | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    tags?: PromptUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type PromptUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rawInput?: StringFieldUpdateOperationsInput | string
    optimizedText?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    tone?: EnumPromptToneFieldUpdateOperationsInput | $Enums.PromptTone
    format?: EnumOutputFormatFieldUpdateOperationsInput | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    tags?: PromptUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutEvaluationsInput = {
    update: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
    create: XOR<UserCreateWithoutEvaluationsInput, UserUncheckedCreateWithoutEvaluationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvaluationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvaluationsInput, UserUncheckedUpdateWithoutEvaluationsInput>
  }

  export type UserUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    usageRecords?: UsageRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEvaluationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    usageRecords?: UsageRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyCreateNestedManyWithoutUserInput
    usageRecords?: UsageRecordCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyUncheckedCreateNestedManyWithoutUserInput
    usageRecords?: UsageRecordUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentCreateWithoutSubscriptionInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentCreateManySubscriptionInputEnvelope = {
    data: PaymentCreateManySubscriptionInput | PaymentCreateManySubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUpdateManyWithoutUserNestedInput
    usageRecords?: UsageRecordUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUncheckedUpdateManyWithoutUserNestedInput
    usageRecords?: UsageRecordUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    subscriptionId?: StringFilter<"Payment"> | string
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    method?: EnumPaymentMethodNullableFilter<"Payment"> | $Enums.PaymentMethod | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    gatewayResponse?: JsonNullableFilter<"Payment">
    invoiceNumber?: StringNullableFilter<"Payment"> | string | null
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    failedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type SubscriptionCreateWithoutPaymentsInput = {
    id?: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    billingInterval?: $Enums.BillingInterval | null
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    trialEndsAt?: Date | string | null
    canceledAt?: Date | string | null
    gatewayCustomerId?: string | null
    gatewaySubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPaymentsInput = {
    id?: string
    userId: string
    tier?: $Enums.SubscriptionTier
    status?: $Enums.SubscriptionStatus
    billingInterval?: $Enums.BillingInterval | null
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    trialEndsAt?: Date | string | null
    canceledAt?: Date | string | null
    gatewayCustomerId?: string | null
    gatewaySubscriptionId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
  }

  export type SubscriptionUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    billingInterval?: NullableEnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval | null
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatewayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tier?: EnumSubscriptionTierFieldUpdateOperationsInput | $Enums.SubscriptionTier
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    billingInterval?: NullableEnumBillingIntervalFieldUpdateOperationsInput | $Enums.BillingInterval | null
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trialEndsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gatewayCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewaySubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutUsageRecordsInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptCreateNestedManyWithoutUserInput
    evaluations?: EvaluationCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUsageRecordsInput = {
    id?: string
    email: string
    name?: string | null
    supabaseId: string
    avatarUrl?: string | null
    locale?: string
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    prompts?: PromptUncheckedCreateNestedManyWithoutUserInput
    evaluations?: EvaluationUncheckedCreateNestedManyWithoutUserInput
    apiKeys?: UserApiKeyUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUsageRecordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsageRecordsInput, UserUncheckedCreateWithoutUsageRecordsInput>
  }

  export type UserUpsertWithoutUsageRecordsInput = {
    update: XOR<UserUpdateWithoutUsageRecordsInput, UserUncheckedUpdateWithoutUsageRecordsInput>
    create: XOR<UserCreateWithoutUsageRecordsInput, UserUncheckedCreateWithoutUsageRecordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsageRecordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsageRecordsInput, UserUncheckedUpdateWithoutUsageRecordsInput>
  }

  export type UserUpdateWithoutUsageRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsageRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseId?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    locale?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompts?: PromptUncheckedUpdateManyWithoutUserNestedInput
    evaluations?: EvaluationUncheckedUpdateManyWithoutUserNestedInput
    apiKeys?: UserApiKeyUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PromptCreateManyUserInput = {
    id?: string
    rawInput: string
    optimizedText: string
    taskType: $Enums.TaskType
    tone: $Enums.PromptTone
    format: $Enums.OutputFormat
    targetLlm: $Enums.LLMProvider
    tags?: PromptCreatetagsInput | string[]
    isPublic?: boolean
    deletedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EvaluationCreateManyUserInput = {
    id?: string
    promptId?: string | null
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationCreatesuggestionsInput | string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt?: Date | string
  }

  export type UserApiKeyCreateManyUserInput = {
    id?: string
    provider: $Enums.LLMProvider
    encryptedKey: string
    iv: string
    authTag: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsageRecordCreateManyUserInput = {
    id?: string
    type: $Enums.UsageType
    count?: number
    date?: Date | string
    createdAt?: Date | string
  }

  export type PromptUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawInput?: StringFieldUpdateOperationsInput | string
    optimizedText?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    tone?: EnumPromptToneFieldUpdateOperationsInput | $Enums.PromptTone
    format?: EnumOutputFormatFieldUpdateOperationsInput | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    tags?: PromptUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawInput?: StringFieldUpdateOperationsInput | string
    optimizedText?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    tone?: EnumPromptToneFieldUpdateOperationsInput | $Enums.PromptTone
    format?: EnumOutputFormatFieldUpdateOperationsInput | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    tags?: PromptUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluations?: EvaluationUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rawInput?: StringFieldUpdateOperationsInput | string
    optimizedText?: StringFieldUpdateOperationsInput | string
    taskType?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    tone?: EnumPromptToneFieldUpdateOperationsInput | $Enums.PromptTone
    format?: EnumOutputFormatFieldUpdateOperationsInput | $Enums.OutputFormat
    targetLlm?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    tags?: PromptUpdatetagsInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptId?: NullableStringFieldUpdateOperationsInput | string | null
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiKeyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiKeyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    encryptedKey?: StringFieldUpdateOperationsInput | string
    iv?: StringFieldUpdateOperationsInput | string
    authTag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType
    count?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType
    count?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUsageTypeFieldUpdateOperationsInput | $Enums.UsageType
    count?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationCreateManyPromptInput = {
    id?: string
    userId: string
    promptText: string
    structureScore: number
    clarityScore: number
    completenessScore: number
    specificityScore: number
    overallScore: number
    feedback: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationCreatesuggestionsInput | string[]
    provider: $Enums.LLMProvider
    model: string
    createdAt?: Date | string
  }

  export type EvaluationUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEvaluationsNestedInput
  }

  export type EvaluationUncheckedUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EvaluationUncheckedUpdateManyWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    promptText?: StringFieldUpdateOperationsInput | string
    structureScore?: FloatFieldUpdateOperationsInput | number
    clarityScore?: FloatFieldUpdateOperationsInput | number
    completenessScore?: FloatFieldUpdateOperationsInput | number
    specificityScore?: FloatFieldUpdateOperationsInput | number
    overallScore?: FloatFieldUpdateOperationsInput | number
    feedback?: JsonNullValueInput | InputJsonValue
    suggestions?: EvaluationUpdatesuggestionsInput | string[]
    provider?: EnumLLMProviderFieldUpdateOperationsInput | $Enums.LLMProvider
    model?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManySubscriptionInput = {
    id?: string
    amount: number
    currency?: string
    status?: $Enums.PaymentStatus
    method?: $Enums.PaymentMethod | null
    gatewayPaymentId?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: string | null
    paidAt?: Date | string | null
    failedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    method?: NullableEnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}