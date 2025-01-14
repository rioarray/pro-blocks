import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Spin } from 'antd';

export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <PageHeaderWrapper content="这是一个新页面，从这里进行开发！">
      <div style={{ paddingTop: 100, textAlign: 'center' }}>
        <Spin spinning={loading} size="large"></Spin>
      </div>
    </PageHeaderWrapper>
  );
};
