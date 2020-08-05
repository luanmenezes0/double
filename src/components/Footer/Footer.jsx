import React from 'react';
import styles from './Footer.module.css'
import { Row, Col } from 'antd';
import Text from 'antd/lib/typography/Text';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Row>
        <Col span={8} />
        <Col span={8}>
          <div className={styles.Contact}>
            <Text type="secondary">Trílogo® - 2020</Text><br />
            <Text type="secondary">85 4042 9333 - contato@trilogo.com.br</Text>
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.Version}>
            <Text type="secondary">Versão 2.30.8</Text>
          </div>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
