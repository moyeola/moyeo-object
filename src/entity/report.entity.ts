import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './common/baseEntity';
import { UserEntity } from './user.entity';
import { ReportReasonEnum, ReportStatusEnum } from 'src/enum/report.enum';

@Entity('report')
export class ReportEntity extends BaseEntity {
    @ManyToOne(() => UserEntity)
    user: UserEntity;

    @ManyToOne(() => UserEntity)
    reporter: UserEntity;

    @Column({
        type: 'enum',
        enum: ReportStatusEnum,
        default: ReportStatusEnum.PENDING,
    })
    status: ReportStatusEnum;

    @Column({
        type: 'text',
        enum: ReportReasonEnum,
        default: ReportReasonEnum.GENERAL,
    })
    reason: ReportReasonEnum;

    @Column({
        nullable: true,
    })
    description?: string;

    static create(user: UserEntity, reporter: UserEntity): ReportEntity {
        const report = new ReportEntity();
        report.user = user;
        report.reporter = reporter;

        return report;
    }
}
