import { ReportEntity } from 'src/entity/report.entity';
import { UserDto } from './user.dto';

export class ReportDto {
    id: number;
    user: UserDto;
    reporter: UserDto;

    /**
     * ReportEntity로부터 ReportDto를 생성합니다.
     * ReportEntity에 user와 reporter가 존재해야 합니다.
     * @param report
     * @returns
     */
    static from(report: ReportEntity): ReportDto {
        const dto = new ReportDto();
        dto.id = report.id;
        dto.user = UserDto.from(report.user);
        dto.reporter = UserDto.from(report.reporter);
        return dto;
    }
}
