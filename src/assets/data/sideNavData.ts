import AppsIcon from "../../components/icons/AppsIcons.tsx";
import PenIcon from "../../components/icons/PenIcon.tsx";
import GroupIcon from "../../components/icons/GroupIcon.tsx";
import EmptyHourGlassIcon from "../../components/icons/EmptyHourGlassIcon.tsx";
import CameraIcon from "../../components/icons/CameraIcon.tsx";
import DeleteIcon from "../../components/icons/DeleteIcon.tsx";
import SubscriptionsIcon from "../../components/icons/SubscriptionsIcon.tsx";
import FileAttachIcon from "../../components/icons/FileAttachIcon.tsx";
import AlarmIcon from "../../components/icons/AlarmIcon.tsx";

export default [
    {
        title: '',
        items: [
            {
                text: 'Dashboard',
                icon: AppsIcon()
            },
            {
                text: 'Item 1',
                icon: PenIcon()
            },
            {
                text: 'Item 2',
                icon: GroupIcon()
            },
            {
                text: 'Item 3',
                icon: EmptyHourGlassIcon()
            }
        ]
    },
    {
        title: 'OTHERS 1',
        items: [
            {
                text: 'Item 4',
                icon: CameraIcon()
            },
            {
                text: 'Item 5',
                icon: DeleteIcon()
            }
        ]
    },
    {
        title: 'OTHERS 2',
        items: [
            {
                text: 'Item 6',
                icon: SubscriptionsIcon()
            },
            {
                text: 'Item 7',
                icon: FileAttachIcon()
            },
            {
                text: 'Item 8',
                icon: AlarmIcon()
            }
        ]
    }
]
