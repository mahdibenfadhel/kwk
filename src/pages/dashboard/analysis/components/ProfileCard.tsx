import { Card, Col, Row } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type moment from 'moment';
import type { DataItem } from '../data.d';
import styles from '../style.less';
import profilePic from '../../../../assets/images/profilePic.jpg'
import { DiffOutlined, DownloadOutlined, ShareAltOutlined, StarOutlined, WalletOutlined } from '@ant-design/icons';
type RangePickerValue = RangePickerProps<moment.Moment>['value'];
export type TimeType = 'today' | 'week' | 'month' | 'year';


const rankingListData: { title: string; total: number }[] = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}
const ProfileCard = ({
  loading,
}: {
  rangePickerValue: RangePickerValue;
  isActive: (key: TimeType) => string;
  ProfileData: DataItem[];
  loading: boolean;
  handleRangePickerChange: (dates: RangePickerValue, dateStrings: [string, string]) => void;
  selectDate: (key: TimeType) => void;
}) => (
  <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
    <div className={styles.profileCard}>
      <Row>
        <Col lg={5}> <img alt='Banner' src={profilePic} /></Col>
        <Col lg={19}>
          <Row className={styles.detailCard}>
          <Col lg={16}>
            <div className={styles.detail}>
            <h2>Niccolò di Bernardo dei Machiavelli </h2>&nbsp;&nbsp;<p>Writer in Politics</p>&nbsp;&nbsp;<span className={styles.luna}>Him/HE</span>
            </div>
            <div  className={styles.detail}>
             ALT &nbsp;<p>Diplomacy </p>  &nbsp;~&nbsp;  <p>Internal affairs</p>
            </div>
            <div  className={styles.detail}>
              ALT &nbsp;<p>Politics </p>  &nbsp;~&nbsp;  <p> Advisor</p>
            </div>
          </Col>
            <Col lg={8} className={styles.icons}>
              <DiffOutlined />
              <StarOutlined />
              <WalletOutlined />
              <DownloadOutlined />
              <ShareAltOutlined />
            </Col>
        </Row>
          <Row className={styles.detailCard}>
            <Col lg={24}>
              <div className={styles.biography}>
               <p> Biography</p>
                <div className={styles.biographyInner}>
                  <p>Hello world !<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec lobortis dui. Mauris porta justo non augue porttitor volutpat. Curabitur ut velit consectetur, venenatis nibh id, lacinia dui. Mauris porta justo non augue porttitor volutpat.
                    Curabitur ut velit consectetur, venenatis nibh id, lacinia dui. Mauris porta justo non augue porttitor volutpat. Curabitur ut velit consectetur, venenatis nibh id, lacinia dui. </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </Card>
);

export default ProfileCard;
