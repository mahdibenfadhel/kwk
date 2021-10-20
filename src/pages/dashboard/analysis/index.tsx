import type { FC } from 'react';
import { Suspense, useState } from 'react';
import { Col, Row, Tabs } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';
import type moment from 'moment';
import './tabs.css'
import { useRequest } from 'umi';
import banner from '../../../assets/images/Banner.jpg'
import { fakeChartData } from './service';
import PageLoading from './components/PageLoading';
import type {  TimeType } from './components/ProfileCard';
import { getTimeDistance } from './utils/utils';
import type { AnalysisData } from './data.d';
import styles from './style.less';
import ProfileCard from './components/ProfileCard';
import ExperienceView from '@/pages/dashboard/analysis/components/ProportionSales';

type RangePickerValue = RangePickerProps<moment.Moment>['value'];

type AnalysisProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};


const Analysis: FC<AnalysisProps> = () => {
  const [rangePickerValue, setRangePickerValue] = useState<RangePickerValue>(
    getTimeDistance('year'),
  );

  const { loading, data } = useRequest(fakeChartData);

  const selectDate = (type: TimeType) => {
    setRangePickerValue(getTimeDistance(type));
  };

  const handleRangePickerChange = (value: RangePickerValue) => {
    setRangePickerValue(value);
  };

  const isActive = (type: TimeType) => {
    if (!rangePickerValue) {
      return '';
    }
    const value = getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0] as moment.Moment, 'day') &&
      rangePickerValue[1].isSame(value[1] as moment.Moment, 'day')
    ) {
      return styles.currentDate;
    }
    return '';
  };

  const { TabPane } = Tabs;


  return (
    <GridContent>
      <>
        <Suspense fallback={<PageLoading />}>
          <Row className={styles.banner_image}>
            <Col md={24}>
              <img alt='Banner' src={banner} />
            </Col>
          </Row>
        </Suspense>

        <Suspense fallback={null}>
          <ProfileCard
            rangePickerValue={rangePickerValue}
            ProfileData={data?.salesData || []}
            isActive={isActive}
            handleRangePickerChange={handleRangePickerChange}
            loading={loading}
            selectDate={selectDate}
          />
        </Suspense>
        <Suspense fallback={null}>
        <Tabs defaultActiveKey="1" size={'large'} style={{ marginBottom: 32 }} className='mainTab'>
          <TabPane tab="Professional" key="1" className={styles.pane}>
            <Tabs defaultActiveKey="1" size={'large'} style={{ marginBottom: 32 }} className='proTab'>
              <TabPane tab="Experience View" key="1" className={styles.pane}>
                <ExperienceView/>
              </TabPane>
              <TabPane tab="View list" key="2" className={styles.pane}>
                Content of tab 2
              </TabPane>
              <TabPane tab="Browse Testimonials" key="3" className={styles.pane}>
                Content of tab 3
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="Acadademia & Vocational" key="2" className={styles.pane}>
            Content of tab 2
          </TabPane>
          <TabPane tab="Associative Engagements" key="3" className={styles.pane}>
            Content of tab 3
          </TabPane>
          <TabPane tab="Portfolio" key="4" className={styles.pane}>
            Content of tab 3
          </TabPane>
          <TabPane tab="Activity" key="5" className={styles.pane}>
            Content of tab 3
          </TabPane>
        </Tabs>
        </Suspense>
      </>
    </GridContent>
  );
};

export default Analysis;
