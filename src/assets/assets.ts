import logo from "./logo.svg";
import gradientBackground from "./gradientBackground.png";
import user_group from "./user_group.png";
import star_icon from "./star_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import profile_img_1 from "./profile_img_1.png";
import arrow_icon from "./arrow_icon.svg";
import { SquarePen, Hash, Image, Eraser, Scissors, FileText, type LucideIcon } from 'lucide-react';
import ai_gen_img_1 from "./ai_gen_img_1.png";
import ai_gen_img_2 from "./ai_gen_img_2.png";
import ai_gen_img_3 from "./ai_gen_img_3.png";

// Assets interface
interface Assets {
    logo: string;
    gradientBackground: string;
    user_group: string;
    star_icon: string;
    star_dull_icon: string;
    profile_img_1: string;
    arrow_icon: string;
}

// AI Tools Data interface
interface AiToolData {
    title: string;
    description: string;
    Icon: LucideIcon;
    bg: {
        from: string;
        to: string;
    };
    path: string;
}

// Testimonial Data interface
interface TestimonialData {
    image: string;
    name: string;
    title: string;
    content: string;
    rating: number;
}

// Creation Data interface
interface CreationData {
    id: number;
    user_id: string;
    prompt: string;
    content: string;
    type: string;
    publish: boolean;
    likes: string[];
    created_at: string;
    updated_at: string;
    __v?: number;
}

export const assets: Assets = {
    logo,
    gradientBackground,
    user_group,
    star_icon,
    star_dull_icon,
    profile_img_1,
    arrow_icon,
};

export const AiToolsData: AiToolData[] = [
    {
        title: 'Công cụ viết bài AI',
        description: 'Tạo ra các bài viết chất lượng cao, hấp dẫn về bất kỳ chủ đề nào với công nghệ viết AI của chúng tôi.',
        Icon: SquarePen,
        bg: { from: '#3588F2', to: '#0BB0D7' },
        path: '/ai/write-article'
    },
    {
        title: 'Tạo tiêu đề Blog',
        description: 'Tìm tiêu đề hoàn hảo, bắt mắt cho các bài đăng blog của bạn với bộ tạo tiêu đề được hỗ trợ bởi AI.',
        Icon: Hash,
        bg: { from: '#B153EA', to: '#E549A3' },
        path: '/ai/blog-titles'
    },
    {
        title: 'Tạo ảnh AI',
        description: 'Tạo ra những hình ảnh tuyệt đẹp với công cụ tạo ảnh AI của chúng tôi, Trải nghiệm sức mạnh của AI',
        Icon: Image,
        bg: { from: '#20C363', to: '#11B97E' },
        path: '/ai/generate-images'
    },
    {
        title: 'Xóa nền ảnh',
        description: 'Dễ dàng xóa nền khỏi hình ảnh của bạn với công cụ được hỗ trợ bởi AI.',
        Icon: Eraser,
        bg: { from: '#F76C1C', to: '#F04A3C' },
        path: '/ai/remove-background'
    },
    {
        title: 'Xóa đối tượng',
        description: 'Xóa các đối tượng không mong muốn khỏi hình ảnh của bạn một cách liền mạch với công cụ xóa đối tượng AI.',
        Icon: Scissors,
        bg: { from: '#5C6AF1', to: '#427DF5' },
        path: '/ai/remove-object'
    },
    {
        title: 'Đánh giá CV',
        description: 'Để AI đánh giá CV của bạn nhằm cải thiện cơ hội có được công việc mơ ước.',
        Icon: FileText,
        bg: { from: '#12B7AC', to: '#08B6CE' },
        path: '/ai/review-resume'
    }
];

export const dummyTestimonialData: TestimonialData[] = [
    {
        image: assets.profile_img_1,
        name: 'Nguyễn Văn A',
        title: 'Giám đốc Marketing, TechCorp',
        content: 'ContentAI đã cách mạng hóa quy trình làm việc nội dung của chúng tôi. Chất lượng bài viết rất xuất sắc và giúp chúng tôi tiết kiệm hàng giờ làm việc mỗi tuần.',
        rating: 4,
    },
    {
        image: assets.profile_img_1,
        name: 'Trần Thị B',
        title: 'Người tạo nội dung, TechCorp',
        content: 'ContentAI đã làm cho quá trình tạo nội dung của chúng tôi trở nên dễ dàng. Các công cụ AI đã giúp chúng tôi sản xuất nội dung chất lượng cao nhanh hơn bao giờ hết.',
        rating: 5,
    },
    {
        image: assets.profile_img_1,
        name: 'Lê Văn C',
        title: 'Biên tập viên nội dung, TechCorp',
        content: 'ContentAI đã biến đổi quy trình tạo nội dung của chúng tôi. Các công cụ AI đã giúp chúng tôi sản xuất nội dung chất lượng cao nhanh hơn bao giờ hết.',
        rating: 4,
    },
];

export const dummyCreationData: CreationData[] = [
    {
        "id": 9,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Tạo tiêu đề blog cho từ khóa blog trong danh mục Công nghệ.",
        "content": "Dưới đây là một số lựa chọn tiêu đề blog cho blog công nghệ, với các góc độ khác nhau:\n\n**Tổng quát & Rộng:**\n\n*   Blog Công nghệ: Tin tức, Đánh giá và Thông tin chi tiết\n*   Công nghệ Hôm nay: Liều lượng Công nghệ Hàng ngày của Bạn\n*   Tương lai là Bây giờ: Khám phá Thế giới Công nghệ\n*   Nói chuyện Công nghệ: Giải mã những Đổi mới Mới nhất\n\n**Cụ thể hơn & Hấp dẫn:**\n\n*   Giải mã Công nghệ: Hiểu rõ Thế giới Số\n*   Vượt ra ngoài Thiết bị: The",
        "type": "blog-title",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:09:50.492Z",
        "updated_at": "2025-07-01T11:09:50.492Z"
    },
    {
        "id": 8,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Tạo tiêu đề blog cho từ khóa blog trong danh mục Tổng quát.",
        "content": "Dưới đây là một số lựa chọn tiêu đề blog cho blog về các blog trong danh mục Tổng quát, từ đơn giản đến sáng tạo hơn:\n\n**Đơn giản:**\n\n*   Blog về Blog: Mọi thứ Bạn Cần Biết về Viết Blog\n*   Thông tin về Blog: Mẹo, Thủ thuật và Xu hướng\n*   Hướng dẫn của Bạn về Thế giới Blog\n\n**Sáng tạo hơn:**\n\n*   Vượt ra ngoài Bài đăng: Khám phá Nghệ thuật Viết Blog\n*   Mở khóa Blogosphere: Điều hướng Thế giới Viết Trực tuyến",
        "type": "blog-title",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:08:10.450Z",
        "updated_at": "2025-07-01T11:08:10.450Z"
    },
    {
        "id": 7,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Viết một bài về AI với Lập trình trong Ngắn gọn (500-800 từ).",
        "content": "## AI và Lập trình: Mối quan hệ Cộng sinh Định hình lại Tương lai\n\nTrí tuệ nhân tạo (AI) và lập trình, từng là những lĩnh vực riêng biệt, giờ đây đã gắn kết chặt chẽ, tạo nên một mối quan hệ cộng sinh mạnh mẽ đang cách mạng hóa các ngành công nghiệp và thúc đẩy đổi mới. Hiểu được mối liên kết này là rất quan trọng đối với bất kỳ ai muốn định hướng trong tương lai của công nghệ.\n\nCơ bản, AI là khả năng của máy móc bắt chước hành vi thông minh của con người. Điều này đạt được thông qua các thuật toán, về cơ bản là những bộ hướng dẫn được các lập trình viên - những người viết code - tạo ra một cách tỉ mỉ. Do đó, lập trình là xương sống của AI, cung cấp ngôn ngữ và cấu trúc cần thiết để biến những thuật toán này thành hiện thực.\n\n**Lập trình Thúc đẩy AI: Xây dựng Nền tảng**\n\nCác mô hình AI không xuất hiện một cách kỳ diệu. Chúng được xây dựng, huấn luyện và triển khai bằng cách sử dụng code. Đây là cách:\n\n*   **Tiền xử lý Dữ liệu:** Dữ liệu thô, nguồn sống của AI, thường rối rắm và không thể sử dụng ở dạng ban đầu. Các lập trình viên sử dụng ngôn ngữ lập trình như Python với các thư viện như Pandas và NumPy để làm sạch, chuyển đổi và chuẩn bị dữ liệu này cho việc huấn luyện.\n*   **Phát triển Mô hình:** Các lập trình viên sử dụng ngôn ngữ lập trình như Python và R, kết hợp với các thư viện máy học như TensorFlow, PyTorch và scikit-learn để xây dựng và huấn luyện các mô hình AI.\n*   **Triển khai và Tích hợp:** Sau khi được huấn luyện, các mô hình AI cần được triển khai và tích hợp vào các ứng dụng thực tế. Điều này bao gồm việc viết code để kết nối mô hình với các hệ thống hiện có.\n*   **Bảo trì và Tối ưu hóa:** Các mô hình AI không phải là thực thể tĩnh. Chúng cần được giám sát, bảo trì và tối ưu hóa liên tục để đảm bảo chúng vẫn chính xác và hiệu quả.\n\n**AI Trao quyền cho Lập trình: Cách mạng hóa Phát triển**\n\nMối quan hệ không chỉ là một chiều. AI cũng đang biến đổi cách thức lập trình, làm cho các nhà phát triển hiệu quả và năng suất hơn.\n\n*   **Hoàn thành và Gợi ý Code:** Các công cụ được hỗ trợ bởi AI như GitHub Copilot và Tabnine phân tích ngữ cảnh code và gợi ý các đoạn code, giảm bớt các tác vụ lặp đi lặp lại và tăng tốc phát triển.\n*   **Kiểm thử và Gỡ lỗi Tự động:** AI có thể tự động hóa quá trình kiểm thử code và xác định lỗi. Bằng cách phân tích các mẫu code và xác định các lỗ hổng tiềm ẩn, các công cụ AI có thể giúp các nhà phát triển phát hiện lỗi sớm.\n*   **Tạo Code:** AI ngày càng có khả năng tạo code từ các mô tả bằng ngôn ngữ tự nhiên. Điều này cho phép các nhà phát triển tập trung vào các khía cạnh cấp cao hơn của thiết kế phần mềm.\n*   **Học tập Cá nhân hóa:** AI có thể cá nhân hóa trải nghiệm học tập cho những người mong muốn học lập trình bằng cách điều chỉnh nội dung giáo dục và cung cấp phản hồi cá nhân.\n\n**Tương lai: Hợp tác và Chuyên môn hóa**\n\nTương lai của AI và lập trình là một sự hợp tác và chuyên môn hóa ngày càng tăng. Khi AI trở nên tinh vi hơn, các lập trình viên sẽ cần tập trung vào các nhiệm vụ cấp cao hơn như thiết kế kiến trúc AI, quản lý pipeline dữ liệu và đảm bảo các cân nhắc đạo đức được giải quyết.\n\nNhu cầu về các chuyên gia có kỹ năng hiểu cả AI và lập trình đang tăng nhanh. Những cá nhân có bộ kỹ năng này có vị trí tốt để dẫn đầu trong việc phát triển các giải pháp được hỗ trợ bởi AI sáng tạo trên nhiều ngành công nghiệp.\n\n**Kết luận,** AI và lập trình không phải là những thực thể riêng biệt mà đúng hơn là hai mặt của cùng một đồng xu. Lập trình cung cấp nền tảng cho AI, trong khi AI trao quyền cho lập trình, dẫn đến một quá trình phát triển hiệu quả và sáng tạo hơn. Hiểu được mối quan hệ cộng sinh này là điều cần thiết cho bất kỳ ai muốn phát triển trong bối cảnh công nghệ đang phát triển nhanh chóng. Khi AI tiếp tục tiến bộ, nhu cầu về các chuyên gia có kỹ năng có thể kết nối",
        "type": "article",
        "publish": false,
        "likes": [],
        "created_at": "2025-07-01T11:07:51.312Z",
        "updated_at": "2025-07-01T11:07:51.312Z"
    }
];

export const dummyPublishedCreationData: CreationData[] = [
    {
        "id": 1,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Tạo hình ảnh một cậu bé đang ở trên thuyền và câu cá theo phong cách Anime.",
        "content": ai_gen_img_1,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T09:02:25.035Z",
        "updated_at": "2025-06-19T09:58:37.552Z",
    },
    {
        "id": 2,
        "user_id": "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
        "prompt": "Tạo hình ảnh một cậu bé đi xe đạp trên đường và xe đạp từ năm 2201 theo phong cách Anime.",
        "content": ai_gen_img_2,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yMX02PRbyMtQK6PebpjnxvRNIA",
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-19T08:16:54.614Z",
        "updated_at": "2025-06-19T09:58:40.072Z",
    },
    {
        "id": 3,
        "user_id": "user_2yaW5EHzeDfQbXdAJWYFnZo2bje",
        "prompt": "Tạo hình ảnh một cậu bé đi ô tô trên bầu trời theo phong cách Realistic.",
        "content": ai_gen_img_3,
        "type": "image",
        "publish": true,
        "likes": [
            "user_2yaW5EHzeDfQbXdAJWYFnZo2bje"
        ],
        "created_at": "2025-06-23T11:29:23.351Z",
        "updated_at": "2025-06-23T11:29:44.434Z",
        "__v": 1
    },
];