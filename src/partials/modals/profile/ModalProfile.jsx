import { Fragment } from 'react';
import { KeenIcon } from '@/components';
import { toAbsoluteUrl } from '@/utils';
import { NavbarDropdown } from '@/partials/navbar';
import { Dialog, DialogBody, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { About, CommunityBadges, Connections, Contributions, Projects, WorkExperience } from '@/pages/Admin/bot-functionality-2';
const ModalProfile = ({
  open,
  onOpenChange
}) => {
  return <Fragment>
      <style> 
        {`
          .modal-bg {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/2.png')}');
          }
          .dark .modal-bg  {
            background-image: url('${toAbsoluteUrl('/media/images/2600x1200/2-dark.png')}');
          }
        `}
      </style>

      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="container-fixed max-w-[auto] p-0 [&>button]:hidden">
          <DialogHeader className="modal-rounded-t p-0 border-0 relative min-h-80 flex flex-col items-stretch justify-end bg-center bg-cover bg-no-repeat mb-7 modal-bg">
            <DialogTitle></DialogTitle>
            <DialogDescription></DialogDescription>
            <div className="flex flex-col justify-end border-b-0 grow px-9 bg-gradient-to-t from-light from-3% to-transparent">
              <div className="flex justify-center mb-5">
                <img src={toAbsoluteUrl('/media/avatars/300-1.png')} className="rounded-full border-3 border-success max-h-[100px]" alt="" />
              </div>

            
            </div>

            <button className="btn btn-sm btn-icon btn-light btn-outline absolute top-0 end-0 me-5 mt-5 lg:me-10 shadow-default" data-modal-dismiss="true" onClick={onOpenChange}>
              <KeenIcon icon="cross" />
            </button>
          </DialogHeader>
          <DialogBody className="scrollable-y py-0 mb-5 ps-6 pe-3 me-3">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 lg:gap-7.5">
              
            </div>
          </DialogBody>
        </DialogContent>
      </Dialog>
    </Fragment>;
};
export { ModalProfile };