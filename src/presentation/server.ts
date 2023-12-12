import { envs } from "../config/plugins/envs.plugin";
import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDataSource } from "../infrastructure/datasources/mongo-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";
import { LogSeverityLevel } from "../domain/entities/log.entity";

const logRepository = new LogRepositoryImpl(
    //new FileSystemDataSource()
    new MongoLogDataSource(),
);

const emailService = new EmailService();

export class Server {

    public static async start() {

        console.log('Server started...');

        //todo: Mandar email

        // new SendEmailLogs(
        //     emailService,
        //     fileSystemLogRepository,
        // ).execute(
        //     ['test@hotmail.com', 'test@gmail.com']
        // );
        // emailService.sendEmailWithFileSystemLogs(
        //     ['test@hotmail.com', 'test@gmail.com']
        // );

        // const logs = await logRepository.getLogs(LogSeverityLevel.low);
        // console.log(logs);


        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com'
        //         new CheckService(
        //             logRepository,
        //             () => console.log( `${ url } is ok` ),
        //             ( error ) => console.log( error ), 
        //         ).execute( url );
        //     }
        // );

    }
}