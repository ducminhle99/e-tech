import { LinkedinIcon } from '@/components/icons/linkedin';
import { LogoIcon } from '@/components/icons/logo';
import { TwitterIcon } from '@/components/icons/twitter';
import { YoutubeIcon } from '@/components/icons/youtube';
import { Divider } from 'antd';
import { FooterCollapseItem, FooterItem } from './item';

export const Footer = () => {
  return (
    <footer className="mt-3 pt-[30px] mb-[115px]">
      <div className="md:hidden">
        <div className="px-[25px]">
          <FooterCollapseItem data={['Home', 'Game', 'News', 'Math', 'Company', 'Events', 'Partners']} label="WEB MAP" />
          <Divider className="!my-2" />
          <FooterCollapseItem
            data={['Licensing', 'Certification', 'Responsible Gaming', 'Exhibitions', 'Copyright Protection', 'Privacy Policy']}
            label="ABOUT US"
          />
          <Divider className="!my-2" />
          <FooterCollapseItem data={['PG ICE 2017', 'PG ICE 2018', 'PG ICE 2019', 'About ICE']} label="EVENTS" />
        </div>
        <Divider className="!my-2 " />
        <div className="px-[25px]">
          <FooterCollapseItem data={['Relax Gaming', 'Leander Games']} label="OUR PARTNERS" />
          <Divider className="!my-2" />
          <p className="text-xs opacity-30 mt-[50px]">Valletta Buildings, South Street, Valletta - VLT 1103 Malta</p>
          <p className="text-xs opacity-30 mt-[20px]">COPYRIGHT © 2015-2024 ALL RIGHTS RESERVED.</p>
          <ul className="flex gap-[15px] mt-[30px]">
            <li className="cursor-pointer">
              <TwitterIcon />
            </li>
            <li className="cursor-pointer">
              <YoutubeIcon />
            </li>
            <li className="cursor-pointer">
              <LinkedinIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block">
        <Divider className="!my-0" />
        <div className="flex justify-between max-w-[1250px] mx-auto mt-[100px]">
          <div>
            <LogoIcon width={53} height={31} />
            <p className="text-xs opacity-40 mt-[14px] whitespace-pre-line">{'Valletta Buildings, South Street,\n Valletta - VLT 1103 Malta'}</p>
            <ul className="flex gap-[15px] mt-[30px]">
              <li className="cursor-pointer">
                <TwitterIcon />
              </li>
              <li className="cursor-pointer">
                <YoutubeIcon />
              </li>
              <li className="cursor-pointer">
                <LinkedinIcon />
              </li>
            </ul>
          </div>
          <div className="flex gap-[100px] flex-wrap">
            <FooterItem data={['Home', 'Game', 'News', 'Math', 'Company', 'Events', 'Partners']} label="WEB MAP" />
            <FooterItem
              data={['Licensing', 'Certification', 'Responsible Gaming', 'Exhibitions', 'Copyright Protection', 'Privacy Policy']}
              label="ABOUT US"
            />
            <FooterItem data={['PG ICE 2017', 'PG ICE 2018', 'PG ICE 2019', 'About ICE']} label="EVENTS" />
            <FooterItem data={['Relax Gaming', 'Leander Games']} label="OUR PARTNERS" />
          </div>
        </div>
      </div>
    </footer>
  );
};
