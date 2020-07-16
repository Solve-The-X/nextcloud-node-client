import {
    Logger as TSLogLogger,
    ILogObject as LogObject,
    TLogLevelName
} from "tslog";
import Environment from "./environment";

export default class Logger {
    private logger: TSLogLogger;

    public constructor() {

        const env = new Environment();

        let minLevel: TLogLevelName;
        switch (env.getMinLogLevel()) {
            case "silly":
                minLevel = "silly"
                break;
            case "trace":
                minLevel = "trace"
                break;
            case "debug":
                minLevel = "debug"
                break;
            case "info":
                minLevel = "info"
                break;
            case "warn":
                minLevel = "warn"
                break;
            case "error":
                minLevel = "error"
                break;
            case "fatal":
                minLevel = "fatal"
                break;
            default:
                minLevel = "error";
        }
        this.logger = new TSLogLogger({ minLevel });
        // overload is required to get the real position for logging
        this.silly = this.logger.silly.bind(this.logger);
        this.trace = this.logger.trace.bind(this.logger);
        this.debug = this.logger.debug.bind(this.logger);
        this.info = this.logger.info.bind(this.logger);
        this.warn = this.logger.warn.bind(this.logger);
        this.error = this.logger.error.bind(this.logger);
        this.fatal = this.logger.fatal.bind(this.logger);
    }

    /**
     * Logs a silly message.
     * @param args  - Multiple log attributes that should be logged out.
     */
    public silly(...args: unknown[]): LogObject {
        return this.logger.silly(...args);
    }

    /**
     * Logs a trace message.
     * @param args  - Multiple log attributes that should be logged out.
     */
    public trace(...args: unknown[]): LogObject {
        return this.logger.trace(...args);
    }

    /**
     * Logs a debug message.
     * @param args  - Multiple log attributes that should be logged out.
     */
    public debug(...args: unknown[]): LogObject {
        return this.logger.debug(...args);
    }

    /**
     * Logs a info message.
     * @param args  - Multiple log attributes that should be logged out.
     */
    public info(...args: unknown[]): LogObject {
        return this.logger.info(...args);
    }

    /**
     * Logs a warn message.
     * @param args  - Multiple log attributes that should be logged out.
     */
    public warn(...args: unknown[]): LogObject {
        return this.logger.warn(...args);
    }

    /**
     * Logs a error message.
     * @param args  - Multiple log attributes that should be logged out.
     */
    public error(...args: unknown[]): LogObject {
        return this.logger.error(...args);
    }

    /**
     * Logs a fatal message.
     * @param args  - Multiple log attributes that should be logged out.
     */
    public fatal(...args: unknown[]): LogObject {
        return this.logger.fatal(...args);
    }
}
